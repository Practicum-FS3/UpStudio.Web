import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-questions-and-answers',
  standalone: true,
  imports: [QuestionsAndAnswersComponent,CommonModule],
  templateUrl: './questions-and-answers.component.html',
  styleUrl: './questions-and-answers.component.scss'
})



export class QuestionsAndAnswersComponent {
  categories = [
    {
      name: 'השלמות ',
      questions: [
        { question: 'שאלה טכנית 1', answer: 'תשובה לשאלה טכנית 1', open: false },
        { question: 'שאלה טכנית 2', answer: 'תשובה לשאלה טכנית 2', open: false },
        
      ]
    },
    {
      name: ' שינוי סוגי אימון או הקפאה ',
      questions: [
        { question: 'שאלה כללית 1', answer: 'תשובה לשאלה כללית 1', open: false },
        { question: 'שאלה כללית 2', answer: 'תשובה לשאלה כללית 2', open: false },
       
      ]
    },
    {
      name: 'תקנון התנהגות בשיעורים',
      questions: [
        { question: 'שאלה כללית 1', answer: 'תשובה לשאלה כללית 1', open: false },
        { question: 'שאלה כללית 2', answer: 'תשובה לשאלה כללית 2', open: false },
        
      ]
    },
    {
      name: 'שאלות כלליות',
      questions: [
        { question: 'שאלה כללית 1', answer: 'תשובה לשאלה כללית 1', open: false },
        { question: 'שאלה כללית 2', answer: 'תשובה לשאלה כללית 2', open: false },
        
      ]
    },
    // קטגוריות נוספות
  ];

  toggleAccordion(item: any, open: boolean) {
    item.open = !item.open;
  }
}



