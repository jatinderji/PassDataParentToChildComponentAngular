// Add Input decorator
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  
  // Using Input Decorator with default value 0
  @Input() myItem = 0

  ngOnInit(): void {
  }

}
