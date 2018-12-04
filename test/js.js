//component
import { ViewChild } from '@angular/core'; //import ViewChild if not already done

@ViewChild('inputtext') cs; //select your span

ngAfterViewInit() {            
        this.cs.nativeElement.focus(); //focus it at after view initialization 
    }