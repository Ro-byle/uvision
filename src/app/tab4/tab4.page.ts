import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor() {}
  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image source',
      buttons: [{
        text: 'Load from Library',
        handler: () => {
         this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
     },
     {
      text: 'Use Camera',
      handler: () => {
        this.takePicture(this.camera.PictureSourceType.CAMERA);
       }
     },
     {
      text: 'Cancel',
      role: 'cancel'
     }]
   });
   await actionSheet.present();
  }
  takePicture(sourceType: PictureSourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };
    this.camera.getPicture(options).then(imagePath => {
      if (this.plt.is('android') && sourceType === 
      this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath).then(filePath => {
        const correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
        const currentName = imagePath.substring(
          imagePath.lastIndexOf('/') + 1,
          imagePath.lastIndexOf('?'));
        this.copyFileToLocalDir(
          correctPath,
          currentName,
          this.createFileName()
        );
      });
     } else {
      const currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
      const correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
      this.copyFileToLocalDir(
        correctPath,
        currentName,
        this.createFileName()
      );
     }
    });
  }
  createFileName() {
    const d = new Date(),
    n = d.getTime(),
    newFileName = n + '.jpg';
    return newFileName;
}
copyFileToLocalDir(namePath, currentName, newFileName) {
  this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(
    success => {
      this.updateStoredImages(newFileName);
      this.presentToast('Success while storing file.');
    },
    error => {
      this.presentToast('Error while storing file.');
    });
 }
 updateStoredImages(name) {
  this.storage.get(STORAGE_KEY).then(images => {
    let arr = [];
    if (images && images !== '' && images.length > 0) {
      arr = JSON.parse(images);
    } else {
      arr = [];
    }
    if (!arr) {
      const newImages = [name];
      this.storage.set('my_images', JSON.stringify(newImages));
    } else {
      arr.push(name);
      this.storage.set('my_images', JSON.stringify(arr));
    }
   const filePath = this.file.dataDirectory + name;
   const resPath = this.pathForImage(filePath);
   const newEntry = {
      name: name,
      path: resPath,
      filePath: filePath
   };
   this.images = [newEntry, ...this.images];
 });
}
}
