import { Directive, ElementRef, inject, Injector } from '@angular/core';
import * as i0 from "@angular/core";
export class CollapsableDirective {
    constructor() {
        this.element = inject(ElementRef);
        this.injector = inject(Injector);
    }
    // constructor() {}
    ngOnInit() {
        const element = this.element?.nativeElement;
        if (element) {
            const requiredFields = element.querySelectorAll('[required]');
            if (requiredFields.length) {
                const accordion = element?.closest('ion-accordion-group');
                accordion.setAttribute('value', 'open');
            }
        }
    }
    static { this.ɵfac = function CollapsableDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CollapsableDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CollapsableDirective, selectors: [["", "decafCollapsable", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollapsableDirective, [{
        type: Directive,
        args: [{
                selector: '[decafCollapsable]',
                standalone: true
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2FibGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9kaXJlY3RpdmVzL2NvbGxhcHNhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQVUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU9oRixNQUFNLE9BQU8sb0JBQW9CO0lBSmpDO1FBTVUsWUFBTyxHQUE0QixNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEQsYUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztLQTBDckM7SUF6Q0MsbUJBQW1CO0lBRW5CLFFBQVE7UUFDTixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQztRQUM1QyxJQUFHLE9BQU8sRUFBRSxDQUFDO1lBQ1gsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBd0IsQ0FBQztZQUNyRixJQUFHLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDekIsTUFBTSxTQUFTLEdBQUcsT0FBTyxFQUFFLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBZ0IsQ0FBQztnQkFDekUsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDMUMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO3FIQWZVLG9CQUFvQjtvRUFBcEIsb0JBQW9COztpRkFBcEIsb0JBQW9CO2NBSmhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixVQUFVLEVBQUUsSUFBSTthQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgaW5qZWN0LCBPbkluaXQsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2RlY2FmQ29sbGFwc2FibGVdJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBDb2xsYXBzYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+ID0gaW5qZWN0KEVsZW1lbnRSZWYpO1xuICBwcml2YXRlIGluamVjdG9yID0gaW5qZWN0KEluamVjdG9yKTtcbiAgLy8gY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYoZWxlbWVudCkge1xuICAgICAgY29uc3QgcmVxdWlyZWRGaWVsZHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyZXF1aXJlZF0nKSBhcyBOb2RlTGlzdE9mPEVsZW1lbnQ+O1xuICAgICAgaWYocmVxdWlyZWRGaWVsZHMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGFjY29yZGlvbiA9IGVsZW1lbnQ/LmNsb3Nlc3QoJ2lvbi1hY2NvcmRpb24tZ3JvdXAnKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgYWNjb3JkaW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnb3BlbicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4gPSBpbmplY3QoRWxlbWVudFJlZik7XG4gIC8vIHByaXZhdGUgcmVuZGVyZXIgPSBpbmplY3QoUmVuZGVyZXIyKTtcblxuICAvLyBuZ09uSW5pdCgpIHtcbiAgLy8gICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50Py5uYXRpdmVFbGVtZW50O1xuICAvLyAgIGlmKGVsZW1lbnQpIHtcbiAgLy8gICAgIGNvbnN0IHJlcXVpcmVkRmllbGRzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbcmVxdWlyZWRdJykgYXMgTm9kZUxpc3RPZjxFbGVtZW50PjtcblxuICAvLyAgICAgLy8gRmluZCB0aGUgcGFyZW50IGZpZWxkc2V0IGNvbXBvbmVudCBhbmQgc2V0IHJlcXVpcmVkIGF0dHJpYnV0ZSBpZiB0aGVyZSBhcmUgcmVxdWlyZWQgZmllbGRzXG4gIC8vICAgICBjb25zdCBmaWVsZHNldEVsZW1lbnQgPSBlbGVtZW50LmNsb3Nlc3QoJ25neC1kZWNhZi1maWVsZHNldCcpO1xuICAvLyAgICAgaWYgKGZpZWxkc2V0RWxlbWVudCAmJiByZXF1aXJlZEZpZWxkcy5sZW5ndGggPiAwKSB7XG4gIC8vICAgICAgIC8vIFNldCBhIGRhdGEgYXR0cmlidXRlIHRoYXQgdGhlIGZpZWxkc2V0IGNvbXBvbmVudCBjYW4gcmVhZFxuICAvLyAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShmaWVsZHNldEVsZW1lbnQsICdkYXRhLWhhcy1yZXF1aXJlZC1maWVsZHMnLCAndHJ1ZScpO1xuXG4gIC8vICAgICAgIC8vIERpc3BhdGNoIGEgY3VzdG9tIGV2ZW50IHRvIG5vdGlmeSB0aGUgZmllbGRzZXQgY29tcG9uZW50XG4gIC8vICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdyZXF1aXJlZEZpZWxkc0RldGVjdGVkJywge1xuICAvLyAgICAgICAgIGRldGFpbDogeyBoYXNSZXF1aXJlZEZpZWxkczogdHJ1ZSwgY291bnQ6IHJlcXVpcmVkRmllbGRzLmxlbmd0aCB9LFxuICAvLyAgICAgICAgIGJ1YmJsZXM6IHRydWVcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgICAgIGZpZWxkc2V0RWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblxuICAvLyAgICAgICBjb25zdCBhY2NvcmRpb24gPSBlbGVtZW50Py5jbG9zZXN0KCdpb24tYWNjb3JkaW9uLWdyb3VwJykgYXMgSFRNTEVsZW1lbnQ7XG4gIC8vICAgICAgIGlmIChhY2NvcmRpb24pIHtcbiAgLy8gICAgICAgICBhY2NvcmRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdvcGVuJyk7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH1cbn1cbiJdfQ==