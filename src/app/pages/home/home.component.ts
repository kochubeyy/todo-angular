import {ChangeDetectionStrategy, Component} from '@angular/core';
import { CompanyListComponent } from '../../components/company-list/company-list.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { RouterLink } from '@angular/router';
import { ContainerComponent } from '../../components/container/container.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CompanyListComponent,
    TuiButtonModule,
    RouterLink,
    ContainerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
}
