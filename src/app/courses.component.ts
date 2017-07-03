import { CoursesService } from './courses.service';
import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
        {{ text | summary:15 }}
    `
})
export class CoursesComponent{
    text = "me@gmail.comaskljf;lsdfjl;kasj;lkdfhf";

   
}