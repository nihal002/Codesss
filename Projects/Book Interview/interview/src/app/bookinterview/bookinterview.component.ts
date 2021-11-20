import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { InterviewService } from '../interview.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bookinterview',
  templateUrl: './bookinterview.component.html',
  styleUrls: ['./bookinterview.component.css']
})
export class BookinterviewComponent implements OnInit {

  // formVar: FormGroup;
  constructor(private interview:InterviewService) {}

  ngOnInit() {
  
  }

// get register form data as interview
register(interviews)
{

  //calling function bookInterview of service interview service.ts and pass interview data
  this.interview.bookInterview(interviews).subscribe(data=>{
    console.log(data);
  })
}
}
