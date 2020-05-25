import { Component, OnInit, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { Project } from '../../../model/project.model';
import { Command } from '../../../model/command.model';
import { CommandService } from '../../../services/command.service';
import {AddComponent} from '../add/add.component';

@Component({
  selector: 'app-command-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() project: Project;
  commands: [Command];
  error = false;
  errorMessage: string;
  loading = true;
  columns = ['program', 'arguments'];

  constructor(
    private commandService: CommandService,
    private dialog: MatDialog
  ) { }

  addCommand() {
    this.dialog.open(AddComponent, {
      height: '400px',
      width: '600px',
    })
  }

  ngOnInit(): void {
    console.log('hello');
    this.commandService.getProjectCommand(this.project)
      .subscribe((element: [Command] ) => {

        console.log(element);
        if(element)
          this.commands = element;
        else
          this.error = true;

        this.loading = false;
      }, (error: HttpErrorResponse) => {
        this.loading = false;
        this.errorMessage =
          error.status == 404
            ? 'This project doesn\'t exists'
            : 'An error occured';
        this.error = true;
      })
  }

}
