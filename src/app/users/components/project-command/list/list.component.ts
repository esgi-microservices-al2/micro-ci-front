import { Component, OnInit, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { Project } from '../../../model/project.model';
import { Command } from '../../../model/command.model';
import { CommandService } from '../../../services/command.service';
import {AddComponent} from '../add/add.component';

@Component({
  selector: 'ci-app-command-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() project: Project;
  commands: Command[];
  error = false;
  errorMessage: string;
  errorStatus: number;

  loading = true;
  displayedColumns = ['program', 'arguments', 'action'];

  constructor(
    private commandService: CommandService,
    private dialog: MatDialog
  ) { }

  addCommand() {
    const dialog = this.dialog.open(AddComponent, {
      height: '400px',
      width: '600px',
      data: {
        project: this.project,
        exist: !(this.errorStatus === 404 && this.error)
      }
    });

    dialog.afterClosed().subscribe(() => {
      this.getCommands();
      this.error = false;
    });
  }

  ngOnInit(): void {
    this.getCommands();
  }

  deleteCommand(index: number) {

    this.loading = true;
    const cloneCommand = this.commands.concat();
    cloneCommand.splice(index, 1);

    this.commandService.updateCommand(cloneCommand, this.project.id)
      .subscribe(
        element => {
          this.commands = element;
        }, error => {
          this.error = true;
          this.errorMessage = 'Cannot delete your command';
        },
        () => this.loading = false);
  }

  private getCommands() {
    this.commandService.getProjectCommand(this.project)
      .subscribe(element => {
        if (element) {
          this.commands = element;
        } else {
          this.error = true;
        }

        this.loading = false;
      }, (error: HttpErrorResponse) => {
        this.loading = false;
        this.errorStatus = error.status;
        this.errorMessage =
          error.status === 404
            ? 'This project doesn\'t exists'
            : 'An error occured';
        this.error = true;
      });
  }

}
