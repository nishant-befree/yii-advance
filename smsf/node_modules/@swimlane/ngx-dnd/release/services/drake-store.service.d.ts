import { DroppableDirective } from '../directives/ngx-droppable.directive';
import { DraggableDirective } from '../directives/ngx-draggable.directive';
/**
 * Central service that handles all events
 *
 * @export
 * @class DrakeStoreService
 */
export declare class DrakeStoreService {
    private droppableMap;
    private draggableMap;
    private dragulaOptions;
    private drake;
    constructor();
    register(droppable: DroppableDirective): void;
    remove(droppable: DroppableDirective): void;
    registerDraggable(draggable: DraggableDirective): void;
    removeDraggable(draggable: DraggableDirective): void;
    createDrakeOptions(): {
        accepts: (el: any, target: any, source: any, sibling: any) => any;
        copy: (el: any, source: any) => boolean;
        moves: (el: any, source: any, handle: any, sibling: any) => boolean;
        revertOnSpill: boolean;
    };
    registerEvents(): void;
}
