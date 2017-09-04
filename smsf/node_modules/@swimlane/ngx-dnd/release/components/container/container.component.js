import { Component, Input, Output, ViewEncapsulation, ContentChild, TemplateRef, ViewChild, EventEmitter, } from '@angular/core';
import { DroppableDirective } from '../../directives';
var i = 0;
function getNextId() {
    return i++;
}
/**
 * Component that allows nested ngxDroppable and ngxDraggables
 *
 * @export
 * @class ContainerComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
var ContainerComponent = (function () {
    function ContainerComponent() {
        this.copy = false;
        this.removeOnSpill = false;
        this.dropZone = "@@DefaultDropZone-" + getNextId() + "@@";
        this.drop = new EventEmitter();
        this.drag = new EventEmitter();
        this.over = new EventEmitter();
        this.out = new EventEmitter();
        this.remove = new EventEmitter();
        this.cancel = new EventEmitter();
    }
    Object.defineProperty(ContainerComponent.prototype, "dropZones", {
        get: function () {
            return this._dropZones || this._defaultZones;
        },
        set: function (val) {
            this._dropZones = val;
        },
        enumerable: true,
        configurable: true
    });
    ContainerComponent.prototype.ngOnInit = function () {
        this._defaultZones = [this.dropZone];
    };
    ContainerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.droppable.drag.subscribe(function (v) { return _this.drag.emit(v); });
        this.droppable.drop.subscribe(function (v) { return _this.drop.emit(v); });
        this.droppable.over.subscribe(function (v) { return _this.over.emit(v); });
        this.droppable.out.subscribe(function (v) { return _this.out.emit(v); });
        this.droppable.remove.subscribe(function (v) { return _this.remove.emit(v); });
        this.droppable.cancel.subscribe(function (v) { return _this.cancel.emit(v); });
    };
    ContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-dnd-container',
                    templateUrl: './container.component.html',
                    styleUrls: ['./container.component.css'],
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    ContainerComponent.ctorParameters = function () { return []; };
    ContainerComponent.propDecorators = {
        'model': [{ type: Input },],
        'copy': [{ type: Input },],
        'removeOnSpill': [{ type: Input },],
        'droppableItemClass': [{ type: Input },],
        'dropZone': [{ type: Input },],
        'dropZones': [{ type: Input },],
        'moves': [{ type: Input },],
        'template': [{ type: Input }, { type: ContentChild, args: [TemplateRef,] },],
        'droppable': [{ type: Input }, { type: ViewChild, args: [DroppableDirective,] },],
        'drop': [{ type: Output },],
        'drag': [{ type: Output },],
        'over': [{ type: Output },],
        'out': [{ type: Output },],
        'remove': [{ type: Output },],
        'cancel': [{ type: Output },],
    };
    return ContainerComponent;
}());
export { ContainerComponent };
//# sourceMappingURL=container.component.js.map