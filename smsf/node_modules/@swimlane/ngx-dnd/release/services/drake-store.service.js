import { Injectable } from '@angular/core';
import * as dragula from 'dragula';
/**
 * Central service that handles all events
 *
 * @export
 * @class DrakeStoreService
 */
var DrakeStoreService = (function () {
    function DrakeStoreService() {
        this.droppableMap = new WeakMap();
        this.draggableMap = new WeakMap();
        this.dragulaOptions = {};
        this.dragulaOptions = this.createDrakeOptions();
        this.drake = dragula([], this.dragulaOptions);
        this.registerEvents();
    }
    DrakeStoreService.prototype.register = function (droppable) {
        this.droppableMap.set(droppable.container, droppable);
        this.drake.containers.push(droppable.container);
    };
    DrakeStoreService.prototype.remove = function (droppable) {
        this.droppableMap.delete(droppable.container);
        var idx = this.drake.containers.indexOf(droppable.container);
        if (idx > -1) {
            this.drake.containers.splice(idx, 1);
        }
    };
    DrakeStoreService.prototype.registerDraggable = function (draggable) {
        this.draggableMap.set(draggable.element, draggable);
    };
    DrakeStoreService.prototype.removeDraggable = function (draggable) {
        this.draggableMap.delete(draggable.element);
    };
    DrakeStoreService.prototype.createDrakeOptions = function () {
        var _this = this;
        var accepts = function (el, target, source, sibling) {
            if (el.contains(target)) {
                return false;
            }
            var elementComponent = _this.draggableMap.get(el);
            var targetComponent = _this.droppableMap.get(target);
            if (elementComponent && targetComponent) {
                return elementComponent.dropZones.includes(targetComponent.dropZone);
            }
            return true;
        };
        var copy = function (el, source) {
            var sourceComponent = _this.droppableMap.get(source);
            if (sourceComponent) {
                return sourceComponent.copy;
            }
            return false;
        };
        var moves = function (el, source, handle, sibling) {
            var elementComponent = _this.draggableMap.get(el);
            if (elementComponent) {
                return elementComponent.moves(source, handle, sibling);
            }
            return true;
        };
        return { accepts: accepts, copy: copy, moves: moves, revertOnSpill: true };
    };
    DrakeStoreService.prototype.registerEvents = function () {
        var _this = this;
        var dragElm;
        var draggedItem;
        this.drake.on('drag', function (el, source) {
            draggedItem = undefined;
            dragElm = el;
            if (!el || !source) {
                return;
            }
            if (_this.draggableMap.has(el)) {
                var elementComponent = _this.draggableMap.get(el);
                draggedItem = elementComponent.model;
                elementComponent.drag.emit({
                    type: 'drag',
                    el: el,
                    source: source,
                    value: draggedItem
                });
            }
            if (_this.droppableMap.has(source)) {
                var sourceComponent = _this.droppableMap.get(source);
                _this.dragulaOptions.removeOnSpill = sourceComponent.removeOnSpill;
                sourceComponent.drag.emit({
                    type: 'drag',
                    el: el,
                    source: source,
                    sourceComponent: sourceComponent,
                    value: draggedItem
                });
            }
        });
        this.drake.on('drop', function (el, target, source) {
            if (_this.droppableMap.has(target)) {
                var targetComponent = _this.droppableMap.get(target);
                var dropElmModel = draggedItem;
                if (_this.droppableMap.has(source)) {
                    var sourceComponent = _this.droppableMap.get(source);
                    var sourceModel = sourceComponent.model;
                    var targetModel = targetComponent.model;
                    var dropIndex = Array.prototype.indexOf.call(target.children, el);
                    var dragIndex = (sourceModel && draggedItem) ? sourceModel.indexOf(draggedItem) : -1;
                    if (dropIndex > -1 && targetModel) {
                        if (dragIndex > -1 && sourceModel && target === source) {
                            sourceModel.splice(dropIndex, 0, sourceModel.splice(dragIndex, 1)[0]);
                        }
                        else {
                            if (el.parentNode === target) {
                                target.removeChild(el);
                            }
                            var copy = !sourceModel || (dragElm !== el);
                            if (copy) {
                                dropElmModel = JSON.parse(JSON.stringify(dropElmModel));
                            }
                            else {
                                if (el.parentNode !== source) {
                                    // add element back, let angular remove it
                                    source.append(el);
                                }
                                sourceModel.splice(dragIndex, 1);
                            }
                            targetModel.splice(dropIndex, 0, dropElmModel);
                        }
                    }
                }
                targetComponent.drop.emit({
                    type: 'drop',
                    el: el,
                    source: source,
                    value: dropElmModel
                });
            }
        });
        this.drake.on('remove', function (el, container, source) {
            if (_this.droppableMap.has(source)) {
                var sourceComponent = _this.droppableMap.get(source);
                var sourceModel = sourceComponent.model;
                var dragIndex = (draggedItem && sourceModel) ? sourceModel.indexOf(draggedItem) : -1;
                if (dragIndex > -1) {
                    if (el.parentNode !== source) {
                        // add element back, let angular remove it
                        source.append(el);
                    }
                    sourceModel.splice(dragIndex, 1);
                }
                sourceComponent.remove.emit({
                    type: 'remove',
                    el: el,
                    container: container,
                    source: source,
                    value: draggedItem
                });
            }
        });
        this.drake.on('cancel', function (el, container, source) {
            if (_this.droppableMap.has(container)) {
                var containerComponent = _this.droppableMap.get(container);
                containerComponent.cancel.emit({
                    type: 'cancel',
                    el: el,
                    container: container,
                    source: source,
                    value: draggedItem
                });
            }
        });
        this.drake.on('over', function (el, container, source) {
            if (_this.droppableMap.has(container)) {
                var containerComponent = _this.droppableMap.get(container);
                containerComponent.over.emit({
                    type: 'over',
                    el: el,
                    container: container,
                    source: source,
                    value: draggedItem
                });
            }
        });
        this.drake.on('out', function (el, container, source) {
            if (_this.droppableMap.has(container)) {
                var containerComponent = _this.droppableMap.get(container);
                containerComponent.out.emit({
                    type: 'out',
                    el: el,
                    container: container,
                    source: source,
                    value: draggedItem
                });
            }
        });
    };
    DrakeStoreService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DrakeStoreService.ctorParameters = function () { return []; };
    return DrakeStoreService;
}());
export { DrakeStoreService };
//# sourceMappingURL=drake-store.service.js.map