import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Photo } from 'src/app/_models/photo';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { environment } from 'src/environments/environment';
import { FileUploader } from 'ng2-file-upload';
import { AuthService } from 'src/app/_services/auth.service';
import { ListingService } from 'src/app/_services/listing.service';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {
  @Input() photos: Photo[];
  @Input() listingId: number;

  @Output() getMemberPhotoChange = new EventEmitter<string>();

  baseUrl = environment.apiUrl;
  currentmain: Photo;
  public uploader: FileUploader;
  public hasBaseDropZoneOver: boolean = false;
  constructor(private authService: AuthService,
    private listingService: ListingService,
    private alertify: AlertifyService) { }

  ngOnInit() {
    this.initializeuploader();
  }

  fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  initializeuploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'listings/' + this.listingId + '/photos',
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10*1024*1024
    });

    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false;}

    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const res: Photo = JSON.parse(response);
        const photo = {
          id: res.id,
          photoUrl: res.photoUrl,
          dateAdded: res.dateAdded,
          isMain: res.isMain
        };
        this.photos.push(photo);
      }
    }
  }

  setMainPhoto(photo: Photo) {
    this.listingService.setMainPhoto(this.listingId, photo.id)
    .subscribe(() => {
      this.currentmain = this.photos.filter(p => p.isMain == true)[0];
      this.currentmain.isMain = false;
      photo.isMain = true;
    }, error => {
      this.alertify.error(error);
    })
  }

  deletePhoto(id: number) {
    this.alertify.confirm("Do you wish to delete this photo?", () => {
      this.listingService.deletePhoto(this.listingId, id).subscribe(() => {
        this.photos.splice(this.photos.findIndex(p => p.id == id), 1);
        this.alertify.success("Photo has been deleted");
      }, error => {
        this.alertify.error(error);
      })
    })
  }


}
