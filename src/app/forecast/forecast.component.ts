import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
declare var google: any;

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  currentLabel: string = "No location selected"
  estimatedFootCount: string = "N/A";
  successScore: string = "N/A";
  options: any;
  isBinary: string = 'true';
    
    overlays: any[] = [];
    
    dialogVisible: boolean = false;
    
    markerTitle: string = '';
    
    selectedPosition: any;
    
    infoWindow: any;
    
    draggable: boolean = false;
    
    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.options = {
            center: {lat: 33.7285, lng: -84.5077},
            zoom: 12
        };
        
        this.initOverlays();
        this.infoWindow = new google.maps.InfoWindow();
    }
    
    handleMapClick(event: any) {
        this.dialogVisible = true;
        this.selectedPosition = event.latLng;
    }
    
    handleOverlayClick(event: any) {
        let isMarker = event.overlay.getTitle != undefined;
        
        if (isMarker) {
            let title = event.overlay.getTitle();
            this.infoWindow.setContent('<div>' + title + '</div>');
            this.infoWindow.open(event.map, event.overlay);
            event.map.setCenter(event.overlay.getPosition());
            
            this.messageService.add({severity:'info', summary:'Marker Selected', detail: title});
        }
        else {
            this.messageService.add({severity:'info', summary:'Shape Selected', detail: ''});
        }
    }
    
    addMarker() {
        this.clear();
        this.overlays.push(new google.maps.Marker({position:{lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng()}, title:this.markerTitle, draggable: this.draggable}));
        this.currentLabel = this.markerTitle;
        this.markerTitle = '';
        this.dialogVisible = false;
    }
    
    handleDragEnd(event: any) {
        this.messageService.add({severity:'info', summary:'Marker Dragged', detail: event.overlay.getTitle()});
    }
    
    initOverlays() {
        if (!this.overlays||!this.overlays.length) {
            this.overlays = [
                new google.maps.Marker({position: {lat: 33.8026, lng: -84.4107}, title:"Walmart Super Center"}),
            ];
        }
    }
    
    zoomIn(map: any) {
        map.setZoom(map.getZoom()+1);
    }
    
    zoomOut(map: any) {
        map.setZoom(map.getZoom()-1);
    }
    
    clear() {
        this.currentLabel = "No location selected";
        this.estimatedFootCount = "N/A";
        this.successScore = "N/A";
        this.overlays = [];
    }



}
