import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { TracksService } from '../../services/tracks.service'
import { Tracks } from '../../models/tracks.model';
import { HttpClientModule } from '@angular/common/http';



export class AppModule { }
@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [AccordionModule, CommonModule, AvatarModule, BadgeModule, TooltipModule, InputTextModule,HttpClientModule],
  providers: [TracksService,],
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.scss',
  animations: [
    trigger('tabContent', [
      state('hidden', style({ height: '0', opacity: 0 })),
      state('visible', style({ height: '*', opacity: 1 })),
      transition('hidden => visible', animate('300ms ease-in')),
      transition('visible => hidden', animate('300ms ease-out'))
    ])
  ],
})

export class TracksComponent {
  trackTry: Tracks = {
    ID: 0,
    Title: "",
    IsActive: true,
    TotalTraining: 0,
    PriceForTraining: 0,
    NumberOfTrainingPerWeek: 0,
    Description: ""
  };

  tracks:Tracks[]=[];

 constructor(private _tracksService: TracksService) { }

   ngOnInit(): void {
     this.fetchTracks();
   }

  fetchTracks(): void {
    this._tracksService.getAll().subscribe((data: Tracks[]) => {
      this.tracks = data; // Store the retrieved data in the tracksData array
    });
  }

  accordionTabs = [
    { header: 'מנוי אישי קלאסי לפעם בשבוע', content: 'Tab 1 Content', num: 1, active: false, starBool: false },
    { header: 'מנוי אישי חצי שנתי לפעם בשבוע', content: 'Tab 2 Content', num: 2, active: false, starBool: false },
    { header: 'מנוי אישי שנתי לפעם בשבוע', content: 'Tab 3 Content', num: 3, active: false, starBool: false },
    { header: 'מנוי אישי חצי שנתי לפעמיים בשבוע', content: 'Tab 3 Content', num: 4, active: false, starBool: false }

  ];
  // toggleAccordion(item: any, isHovered: boolean): void {
  //   if (isHovered) {
  //     item.open = true;
  //   } else {
  //     item.open = false;
  //   }
  // }

  //  toggleAccordion(index: number): void {
  //   this.accordionTabs.forEach((tab, i) => {
  //              if (i === index) {
  //                  tab.active = !tab.active; // Toggle the clicked tab
  //              } else {
  //                  tab.active = false; // Close other tabs
  //              }
  //          });

  // }

  // toggleAccordion(item: any, open: boolean) {
  //   item.active = !item.active;
  // }
  toggleAccordion(index: number): void {
    this.accordionTabs.forEach((tab, i) => {
      if (i === index) {
        tab.active = !tab.active; // Toggle the clicked tab
      } else {
        tab.active = false; // Close other tabs
      }
    });
  }
  onMouse(index: number): void {
    this.accordionTabs.forEach((tab, i) => {
      if (i === index) {
        tab.starBool = !tab.starBool; // Toggle the clicked tab
      } else {
        tab.starBool = false; // Close other tabs
      }
    });
  }
}



import { Component,OnInit, ElementRef} from '@angular/core';
import { Track } from '../../models/track';
import { TracksService } from '../../services/tracks/tracks.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.scss'
})
export class TracksComponent implements OnInit{

  tracks:Track[]=[];
  
  
  constructor(private _tracksService:TracksService){}

  ngOnInit(): void {
    // this._element.nativeElement.innerHTML = '<span class="pi pi-angle-down"></span>';
    this.fetchTracks();
  }

 fetchTracks(): void {
   this._tracksService.getAll().subscribe((data: Track[]) => {
     this.tracks = data; // Store the retrieved data in the tracksData array
   });
 }
 // Get a reference to your element


// Add a click event listener to the element
// element.addEventListener('click', function() {
//     // Replace the element's content with the <span> tag
//     element.innerHTML = '<span class="pi pi-angle-down"></span>';
// });
a(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    if (element.innerHTML.includes('pi-angle-up')) {
      element.innerHTML = '<span class="pi pi-angle-down"></span>';
    } else {
      element.innerHTML = '<span class="pi pi-angle-up"></span>';
    }
  } else {
    console.log('Error: Element not found');
  }
}
// toggleIcon(itemId: string): void {
//   const element = document.getElementById('pi-' + itemId);
//   if (element) {
//       if (element.innerHTML.includes('pi-angle-down')) {
//           element.innerHTML = '<span class="pi pi-angle-up"></span>';
//       } else {
//           element.innerHTML = '<span class="pi pi-angle-down"></span>';
//       }
//   } else {
//       console.log('Error: Element not found');
//   }
// }
toggleIcon1(itemId: number): void {
  const element = document.getElementById('pi-' + itemId.toString());
 
  if (element) {
      if (element.innerHTML.includes('pi-angle-down')) {
          element.innerHTML = '<span class="pi pi-angle-up"></span>';
      } else {
          element.innerHTML = '<span class="pi pi-angle-down"></span>';
      }
  } else {
      console.log('Error: Element not found');
  }
}
toggleIcon2(itemId: string): void {
  const element = document.getElementById('pi-' + itemId.toString());
  console.log(itemId);
  console.log(element);
  if (element) {
      // const currentId = 'pi-' + itemId.toString();
      // const newId = currentId + '-new'; // Example: Add a suffix '-new' to the current id
      // element.setAttribute('id', newId);
      if (element.innerHTML.includes('pi-angle-down')) {
        const newId = 'pi-angle-up'
        element.setAttribute('id', newId);
    } else {
      const newId = 'pi-angle-down'
      element.setAttribute('id', newId);
    }
    
  } else {
      console.log('Error: Element not found');
  }
}
toggleIcon3(itemId: number): void {
  const element = document.getElementById('pi-' + itemId.toString());
  if (element) {
      if (element.classList.contains('pi-angle-down')) {
          element.classList.remove('pi-angle-down');
          element.classList.add('pi-angle-up');
      } else {
          element.classList.remove('pi-angle-up');
          element.classList.add('pi-angle-down');
      }
  } else {
      console.log('Error: Element not found');
  }
}
 accordionTabs = [
  { title: 'מנוי אישי קלאסי לפעם בשבוע', content: 'Tab 1 Content', num: 1, isActive: false, starBool: false },
  { header: 'מנוי אישי חצי שנתי לפעם בשבוע', content: 'Tab 2 Content', num: 2, active: false, starBool: false },
  { header: 'מנוי אישי שנתי לפעם בשבוע', content: 'Tab 3 Content', num: 3, active: false, starBool: false },
  { header: 'מנוי אישי חצי שנתי לפעמיים בשבוע', content: 'Tab 3 Content', num: 4, active: false, starBool: false }

];

 // toggleAccordion(item: any, isHovered: boolean): void {
 //   if (isHovered) {
 //     item.open = true;
 //   } else {
 //     item.open = false;
 //   }
 // }
 // toggleAccordion(item: any, open: boolean) {
 //   item.active = !item.active;
 // }
 toggleAccordion(index: number): void {
   this.tracks.forEach((tab, i) => {
     if (i === index) {
       tab.isActive = !tab.isActive; // Toggle the clicked tab
     } else {
       tab.isActive = false; // Close other tabs
     }
   });
 }
//  onMouse(index: number): void {
//    this.tracks.forEach((tab, i) => {
//      if (i === index) {
//        tab.starBool = !tab.starBool; // Toggle the clicked tab
//      } else {
//        tab.starBool = false; // Close other tabs
//      }
//    });
//  }

//new
import { Component, OnInit } from '@angular/core';
import { Track } from '../../models/track';
import { TracksService } from '../../services/tracks/tracks.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.scss'
})
export class TracksComponent implements OnInit {

  tracks: Track[] = [];

  constructor(private _tracksService: TracksService) { }

  ngOnInit(): void {
    this.fetchTracks();
  }

  fetchTracks(): void {
    this._tracksService.getAll().subscribe((data: Track[]) => {
      this.tracks = data; // Store the retrieved data in the tracksData array
    });
  }
  toggleIconStarOff(itemId: number): void {
    const element = document.getElementById('star-' + itemId.toString());
    if (element) {
      element.classList.remove('pi-star-fill');
      element.classList.add('pi-star');
    } else {
      console.log('Error: Element not found');
    }
  }
  toggleIconStarOn(itemId: number): void {
    const element = document.getElementById('star-' + itemId.toString());
    if (element) {
      element.classList.remove('pi-star');
      element.classList.add('pi-star-fill');
    } else {
      console.log('Error: Element not found');
    }
  }
  toggleIconAngle(itemId: number): void {
    const element = document.getElementById('angle-' + itemId.toString());
    if (element) {
      if (element.classList.contains('pi-angle-down')) {
        element.classList.remove('pi-angle-down');
        element.classList.add('pi-angle-up');
      } else {
        element.classList.remove('pi-angle-up');
        element.classList.add('pi-angle-down');
      }
    } else {
      console.log('Error: Element not found');
    }
  }
  toggleAccordion(index: number): void {
    this.tracks.forEach((tab, i) => {
      if (i === index) {
        tab.isActive = !tab.isActive; // Toggle the clicked tab
      } else {
        tab.isActive = false; // Close other tabs
      }
    });
  }
}

}
