import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  loading = true;
  contact!: Contact;
  id?: string | null;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.loading = false;
      this.contactService
        .getContactById(this.id)
        .subscribe((contact: Contact) => {
          if (contact) {
            this.contact = contact;
          }
          this.loading = true;
        });
    }
  }
}