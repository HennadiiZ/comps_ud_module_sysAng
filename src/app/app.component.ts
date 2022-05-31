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

  // 127. RouterLink Configuration
  // 128. Relative RouterLink References
  // 129. Alternate RouterLink Syntax
  // 130. Matching Exact Paths

  // 131. A Reusable Tabs Component

  // 132. Views Module Exercise
  // 133. Exercise Solution

  // 134. Displaying a List of Statistics
  // 135. Displaying a List of Items

  // ItemList component was added

  // ===== // Section 11: Advanced Component Reusability + Hooks
  // 136. The Mods Module
  // 137. Modal Window Setup
  // 138. More Basic Modal Setup
  // 139. Natural Issues with Modal Windows
  // 140. Solving the Modal Issue
  // 141. Lifecycle Hooks
  // 142. Hiding the Modal with NgOnDestroy
  // 143. Opening the Modal
  // 144. Closing the Modal
  // 145. Stopping Event Bubbling
  // 146. Making the Modal Reusable
  // 147. Building an Accordion
  // 148. Listing Accordion Elements
  // 
}
