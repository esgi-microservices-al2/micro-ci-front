import { Component, OnInit, Input } from '@angular/core';
import {Project} from '../../model/project.model';
import {Command} from '../../model/command.model';
import { CommandService } from '../../services/command.service';


@Component({
  selector: 'app-project-command',
  templateUrl: './project-command.component.html',
  styleUrls: ['./project-command.component.scss']
})
export class ProjectCommandComponent implements OnInit {

  @Input() project: Project;
  commands: [Command];
  error = false;
  loading = true;
  columns: string[] = ['program', 'arguments'];

  constructor(
    private commandService: CommandService
  ) { }

  ngOnInit(): void {
    this.commandService.getProjectCommand(this.project).subscribe((element: Command ) => {

      if(element)
        this.commands = element;
      else
        this.error = true;

      this.loading = false;
    }, error => {
      this.error = true;
    })
  }
}
