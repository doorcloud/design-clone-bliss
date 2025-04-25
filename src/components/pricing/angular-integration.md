
# Angular Integration Guide

This React component can be wrapped in an Angular component using one of these approaches:

## Option 1: Using Angular Elements (Web Components)

```typescript
// pricing-dialog.component.ts
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pricing-dialog',
  template: `
    <div class="pricing-dialog-wrapper">
      <!-- Mount point for React component -->
      <div id="pricing-dialog-container"></div>
      <button (click)="openDialog()">{{buttonText}}</button>
    </div>
  `
})
export class PricingDialogComponent implements OnInit {
  @Input() buttonText = 'Voir les tarifs';
  @Output() planSelected = new EventEmitter<string>();
  
  openDialog() {
    // Logic to open the pricing dialog would be here
    // This would use a service to interact with the React component
  }

  ngOnInit() {
    // Initialize React component in container
  }
}
```

## Option 2: Using an iframe (Simpler approach)

```typescript
// pricing-dialog.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pricing-dialog',
  template: `
    <div class="pricing-dialog-wrapper">
      <button (click)="isOpen = true" class="btn btn-primary">{{buttonText}}</button>
      <div *ngIf="isOpen" class="dialog-overlay" (click)="isOpen = false">
        <div class="dialog-content" (click)="$event.stopPropagation()">
          <button class="close-btn" (click)="isOpen = false">×</button>
          <iframe [src]="pricingPageUrl" width="100%" height="600px" frameBorder="0"></iframe>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dialog-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
    .dialog-content { background: white; padding: 20px; border-radius: 8px; width: 90%; max-width: 1000px; max-height: 90vh; overflow: auto; position: relative; }
    .close-btn { position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 24px; cursor: pointer; }
  `]
})
export class PricingDialogComponent {
  @Input() buttonText = 'Voir les tarifs';
  isOpen = false;
  pricingPageUrl = 'URL_TO_PRICING_PAGE'; // URL to a hosted version of the pricing page
}
```
