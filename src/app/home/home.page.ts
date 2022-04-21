import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonEditorOptions } from 'ang-jsoneditor';
import { MetadataService } from '../services/metadata.service';
// eslint-disable-next-line @typescript-eslint/naming-convention
declare let JSONEditor: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public editorOptions: JsonEditorOptions;
  public metadata: any = null;
  public componentData: any;
  public editor: any;

  constructor(private _metadataSvc: MetadataService) { }

  ngOnInit(): void {
    // create the editor
    const container = document.getElementById('jsoneditor');
    const options = {
      mode: 'code',
      modes: ['code', 'form', 'text', 'tree', 'view', 'preview'],
      onModeChange: ((newMode: any, oldMode: any) => {
        console.log('Mode switched from', oldMode, 'to', newMode);
      })
    };
    this.editor= new JSONEditor(container, options);
    this._metadataSvc.getMetadata().subscribe((res:any)=>{
      this.metadata = res;
      this.componentData = this.metadata.components.loginComponent;
      this.editor.set(this.metadata);
    })
  }

  render(){
    this.metadata = this.editor.get();
    this.componentData = this.metadata.components.loginComponent;
  }

  save(){
   this._metadataSvc.setMetadata(this.metadata);
  }
}
