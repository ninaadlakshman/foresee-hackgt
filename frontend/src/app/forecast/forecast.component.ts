import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ApiService } from 'src/services/api.service';
import { NCRService } from 'src/services/ncr.service';
declare var google: any;

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  isLoading: boolean = false;
  currentLabel: string = "No location selected"
  latitude: number = 0
  longitude: number = 0
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
    
    constructor(
        private messageService: MessageService,
        private readonly route: ActivatedRoute,
        private router: Router,
        private ncrService: NCRService,
        private apiService: ApiService) {}

    ngOnInit() {
        this.latitude = Number(this.route.snapshot.paramMap.get('latitude'));
        this.longitude = Number(this.route.snapshot.paramMap.get('longitude'));
        this.options = {
            center: {lat: this.latitude, lng: this.longitude},
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
        this.getFootTrafficData(this.selectedPosition.lat(), this.selectedPosition.lng());
    }

    addMarkerWithVals(latitude: number, longitude: number, labelTitle: string) {
        this.overlays.push(new google.maps.Marker({position:{lat: latitude, lng: longitude}, title:labelTitle, draggable: this.draggable}));
        this.dialogVisible = false;
    }
    
    handleDragEnd(event: any) {
        this.messageService.add({severity:'info', summary:'Marker Dragged', detail: event.overlay.getTitle()});
    }
    
    initOverlays() {
        if (!this.overlays||!this.overlays.length) {
            this.overlays = [
                new google.maps.Marker({position: {lat: this.latitude, lng: this.longitude}, title:"Walmart Super Center"}),
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
        this.isLoading = false;
    }

    onFindNearby() {var myHeaders = new Headers();
        myHeaders.append("content-type", "application/json");
        myHeaders.append("nep-organization", "application/json");
        
        var requestOptions: RequestInit = {
          method: 'GET',
          mode: 'no-cors',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch("https://api.ncr.com/site/sites/find-nearby/33.7767488,-84.3984255", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));

        this.addMarkerWithVals(this.latitude + 0.0000001, this.longitude + -0.00000001, 'Attraction #1');
        this.overlays.push(new google.maps.Marker({position: {lat: this.latitude + 0.0000001, lng: this.longitude + -0.00000001}, title:"Attraction #1"}));
        this.addMarkerWithVals(this.latitude - 0.0000001, this.longitude + 0.00000001, 'Attraction #2');
        this.overlays.push(new google.maps.Marker({position: {lat: this.latitude - 0.0000001, lng: this.longitude + 0.00000001}, title:"Attraction #2"}));
        this.addMarkerWithVals(this.latitude + 0.0000002, this.longitude + -0.0000002, 'Attraction #3');
        this.overlays.push(new google.maps.Marker({position: {lat: this.latitude + 0.0000002, lng: this.longitude + -0.0000002}, title:"Attraction #3"}));
    }

    onGoBack() {
        this.router.navigate(['/']);
    }

    getFootTrafficData(latitude: string, longitude: string) {
        this.isLoading = true;
        this.apiService.getFootTraffic(latitude, longitude).subscribe((footCount) => {
            this.estimatedFootCount = footCount;
            this.isLoading = false;
        })
    }

}
