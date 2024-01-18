import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  loading = false;

  constructor(private contactService: ContactService, 
              private router: Router,) { }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe((contacts) => {
        this.contacts = contacts;
        this.loading = true;
    });
  }


  viewDetails(id: number | undefined): void {
    if (id) {
      this.router.navigate(['/contact-details', id]);
    }
  }
}