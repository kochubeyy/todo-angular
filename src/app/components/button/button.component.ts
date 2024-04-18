import {ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import { TUI_IS_E2E } from '@taiga-ui/cdk';
import {TuiButtonModule, TuiTooltipModule} from "@taiga-ui/core";

@Component({
  standalone: true,
  selector: 'app-button',
  imports: [
    TuiButtonModule,
    TuiTooltipModule,
  ],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    '[class._e2e]': 'isE2E'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  @Input() icon: string | null  = null;
  @Input() appearance: string = 'outline';
  @Input() tooltip: string = '';
  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter();

  ngOnInit() {
  }
  constructor(@Inject(TUI_IS_E2E) readonly isE2E: boolean) {}

  handler(event: MouseEvent): void {
    this.onClick.emit(event);
  }
}
