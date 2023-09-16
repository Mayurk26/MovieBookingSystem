import { Component } from '@angular/core';
import { ColDef,GridApi,GridReadyEvent} from 'ag-grid-community'

@Component({
  selector: 'app-admin-total-bookings',
  templateUrl: './admin-total-bookings.component.html',
  styleUrls: ['./admin-total-bookings.component.css']
})
export class AdminTotalBookingsComponent {

  columnDefs:ColDef[]=[
    {headerName:'MovieName',field:'Name',autoHeight:true},
    {headerName:'ShowTiming',field:'ShowTiming',autoHeight:true},
    {headerName:'NoOfTickets',field:'NoOfTickets',autoHeight:true},
    {headerName:'TotalPrice',field:'TotalPrice',autoHeight:true},
  ]

  rowData = [
    { Name: 'Bahubali',ShowTiming:'9:00AM-12:00PM',NoOfTickets:100,TotalPrice:40000},
    { Name: 'Bahubali',ShowTiming:'12:00PM-3:00PM',NoOfTickets:120,TotalPrice:60000},
    { Name: 'Bahubali',ShowTiming:'4:00PM-7:00PM',NoOfTickets:110,TotalPrice:50000},
    { Name: 'Opennheimer',ShowTiming:'9:00AM-12:00PM',NoOfTickets:120,TotalPrice:80000},
    { Name: 'Opennheimer',ShowTiming:'12:00PM-3:00PM',NoOfTickets:110,TotalPrice:70000},
    { Name: 'Opennheimer',ShowTiming:'4:00AM-7:00PM',NoOfTickets:120,TotalPrice:80000},
  ]

}
