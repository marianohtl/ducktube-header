import { Component, OnInit } from "@angular/core";
import { FlexibleHeaderComponent } from "./flexible-header/flexible-header.component";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  standalone: true,

  imports: [FlexibleHeaderComponent],
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

}