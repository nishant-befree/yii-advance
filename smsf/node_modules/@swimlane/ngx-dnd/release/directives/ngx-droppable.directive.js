import { Directive, Input, Output, ElementRef, EventEmitter, Renderer } from '@angular/core';
import { DrakeStoreService } from '../services/drake-store.service';
var i = 10000;
function getNextId() {
    return i++;
}
/**
 * Makes the container droppable and children draggable.
 *
 * @export
 * @class DroppableDirective
 * @implements {OnInit}
 * @implements {OnDestroy}
 * @implements {AfterViewInit}
 */
var DroppableDirective = (function () {
    function DroppableDirective(el, renderer, drakesService) {
        this.el = el;
        this.renderer = renderer;
        this.drakesService = drakesService;
        this.copy = false;
        this.removeOnSpill = false;
        this.drop = new EventEmitter();
        this.drag = new EventEmitter();
        this.over = new EventEmitter();
        this.out = new EventEmitter();
        this.remove = new EventEmitter();
        this.cancel = new EventEmitter();
    }
    Object.defineProperty(DroppableDirective.prototype, "container", {
        get: function () {
            return this.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableDirective.prototype, "dropZone", {
        get: function () {
            return this._dropZone || this.ngxDroppable || this.defaultZone;
        },
        set: function (val) {
            this._dropZone = val;
        },
        enumerable: true,
        configurable: true
    });
    DroppableDirective.prototype.ngOnInit = function () {
        this.defaultZone = "@@DefaultDropZone-" + getNextId() + "@@";
        this.drakesService.register(this);
    };
    DroppableDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.over.subscribe(function (ev) {
            _this.renderer.setElementClass(_this.container, 'gu-over', true);
        });
        this.out.subscribe(function (ev) {
            _this.renderer.setElementClass(_this.container, 'gu-over', false);
        });
    };
    DroppableDirective.prototype.ngOnDestroy = function () {
        this.drakesService.remove(this);
    };
    DroppableDirective.decorators = [
        { type: Directive, args: [{ selector: '[ngxDroppable]' },] },
    ];
    /** @nocollapse */
    DroppableDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer, },
        { type: DrakeStoreService, },
    ]; };
    DroppableDirective.propDecorators = {
        'model': [{ type: Input },],
        'copy': [{ type: Input },],
        'removeOnSpill': [{ type: Input },],
        'ngxDroppable': [{ type: Input },],
        'drop': [{ type: Output },],
        'drag': [{ type: Output },],
        'over': [{ type: Output },],
        'out': [{ type: Output },],
        'remove': [{ type: Output },],
        'cancel': [{ type: Output },],
        'dropZone': [{ type: Input },],
    };
    return DroppableDirective;
}());
export { DroppableDirective };
//# sourceMappingURL=ngx-droppable.directive.js.map