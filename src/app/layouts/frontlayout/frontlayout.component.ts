import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { FooterComponent } from "../../footer/footer.component";
import { RouterOutlet } from "@angular/router";
@Component({
  selector: 'app-frontlayout',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterOutlet],
  templateUrl: './frontlayout.component.html',
  styleUrl: './frontlayout.component.scss'
})
export class FrontlayoutComponent {

}
