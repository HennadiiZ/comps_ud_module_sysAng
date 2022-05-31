import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  // ng g m Elements --routing
  // ng g m Collections --routing
  // ng g m Views --routing
  // ng g m Mods (UI modules, not angular modules) --routing

  // ng g c elements/ElementsHome
  // ng g c collections/CollectionsHome
  // ng g c views/viewsHome
  // ng g c mods/modsHome

  // elements
  // collections
  // views
  // mods 

  //Navigating with RouterLink

  // Lazy vs Eager Loading
  // Implementing Lazy Loading (for elements component)
  // git commit -m "Implementing Lazy Loading for orher components (collections , views , mods ) "
  // Creating a Placeholder Component

  //  113. + 114. Widget Modules +  Implementing a Titled Divider
  //  Widget Module - defines reusable components that will be used in multiple other modules
  // Shared Module (Divider Component)

  // Grabbing Content with NgContent <ng-content></ng-content>
  // 116. Creating a Segment Component
  // 117. NgContent with Selects
      // we can use <ng-content> only once per component OR use it with select="" many times

  // 118. Hiding Empty Elements

  // 119. Building a Reusable Table + 120. Generating and Displaying the Table

  // 120. Generating and Displaying the Table
  // Communicating Down Table Data + Assembling the Table (121. + 122.)
  // Passing Down Class Names . VERY INTERESTING!!!


  // ===== // Section 10: Advanced Component Routing
  // creating Biography + Companies + Partners components
  // Tab Based Navigation +  Adding Child Navigation Routes (124. + 125.)

}
