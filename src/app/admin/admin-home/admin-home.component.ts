import { Component } from '@angular/core';
import { ColDef,GridApi,GridReadyEvent} from 'ag-grid-community';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { User } from 'src/app/models/user';
import { Movie } from 'src/app/models/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  columnDefs: ColDef[] = [
    { headerCheckboxSelection: true, checkboxSelection:true},
    { headerName: 'Name', field: 'name',autoHeight:true },
    { headerName: 'Email', field: 'email',autoHeight:true },
    { headerName: 'Role', field: 'role' ,autoHeight:true},
    {
      headerName: 'Action',
      cellRenderer: this.actionRenderer.bind(this),
      autoHeight:true
    }
  ];

  rowData:User[]=[];

  // rowData = [
  //   { Name: 'Mayur', email: 'mayur@test.com', Role: 'admin' },
  //   { Name: 'Rahul', email: 'rahul@test.com', Role: 'user' },
  //   { Name: 'Abhi', email: 'abhi@test.com', Role: 'user' },
  //   { Name: 'Abhi', email: 'abhi@test.com', Role: 'user' }
  // ];

  gridApi:any= GridApi;
  gridMovieApi:any=GridApi;

  constructor(private router:Router,private adminService:AdminServiceService) {
    this.rowData=this.adminService.getUsers();
    this.movieRowData=this.adminService.getMovies();
  }


  //its an event handler gets triggered when the grid is initialized
  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  //function will call when remove button will click
  //It is removing the specific user entry from table and update the grid data
  onActionClick(rowData: any) {
    console.log('Action clicked for:', rowData);
    const indexToRemove = this.rowData.findIndex(user => user.name === rowData.name);
    if(indexToRemove!==-1){
      this.rowData.splice(indexToRemove,1);
      this.gridApi.setRowData(this.rowData);
    }
   
  }

  // removeUser(index:number){
  //   this.adminService.removeUser(index);
  // }

  //custom cell renderer function that creates the remove button for each row
  actionRenderer(params: any) {
    const button = document.createElement('button');
    button.innerHTML = 'Remove';
    button.addEventListener('click', () => this.onActionClick(params.data));
    return button;
  }

  onSelectionChanged(){
    const selectedRows = this.gridApi.getSelectedRows();
    selectedRows.forEach((row: {role:string; email:string;}) => {
      row.role = row.role === 'admin' ? 'customer': 'admin';
      this.adminService.updateUserRole(row.email,row.role);
    })
  }

  movieColumnDefs: ColDef[] = [
    { headerName: 'Movie Image',
    field: 'image',
    cellRenderer: (params:any) => {
      return `<div class="image-container"><img src="${params.value}" class="movie-image" style="width: 160px; height: 180px;"></div>`;
    },
    width:170,
    autoHeight: true},
    { headerName: 'Movie Name', field: 'name', autoHeight: true },
    { headerName: 'Price', field: 'price', autoHeight: true },
    { headerName: 'Time Slot', field: 'timeSlot', autoHeight: true },
    {
      headerName: 'Action',
      cellRenderer: this.movieActionRenderer.bind(this),
      autoHeight: true
    },
    {
      headerName: 'Edit',
      cellRenderer: this.updateActionRenderer.bind(this),
      autoHeight: true
    }
  ];
  
  movieRowData:Movie[]=[];

  // movieRowData = [
  //   { imageurl:'https://e1.pxfuel.com/desktop-wallpaper/1012/223/desktop-wallpaper-bahubali-bahubali-thumbnail.jpg',moviename: 'Bahubali', price: '500', timeslot: '9:00 AM-12:00PM' },
  //   { imageurl:'https://e1.pxfuel.com/desktop-wallpaper/1012/223/desktop-wallpaper-bahubali-bahubali-thumbnail.jpg',moviename: 'Movie 2', price: '500', timeslot: '12:00 PM-3:00PM' },
   
  // ];

  // removeMovie(id:number){
  //   this.adminService.removeMovie(id);
  // }

  //This function willbe call when remove button of movies table will call
  //It is removing the specific movie entry from the table and update the grid data
  onMovieActionClick(movieRowData: any) {
    console.log('Movie Action clicked for:', movieRowData);
    const index = this.movieRowData.findIndex(movie => movie.name === movieRowData.name);
    if(index!==-1){
      this.movieRowData.splice(index,1);
      this.gridMovieApi.setRowData(this.movieRowData);
    }
  }


  //custom cell renderer function - creating remove button for each row
  movieActionRenderer(params:any){
    const button = document.createElement('button');
    button.innerHTML = 'Remove';
    button.addEventListener('click', () => this.onMovieActionClick(params.data));
    return button;
  }

  //cell renderer function for creating the edit button for each row
  updateActionRenderer(params:any){
    const button = document.createElement('button');
    button.innerHTML = 'Edit';
    button.addEventListener('click', () => this.onUpdateActionClick(params.data));
    return button;
  }

  //to navigate to update form
  onUpdateActionClick(rowData:any){
    this.router.navigate(['admin-update-movie'],{ state: { movieData: rowData }});
  }

  
  onMovieGridReady(params: GridReadyEvent) {
    this.gridMovieApi = params.api;
  }


}
