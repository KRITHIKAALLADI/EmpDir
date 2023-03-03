import * as React from 'react';
import { Suspense } from 'react';
// import 'brace/mode/javascript';
// import 'brace/theme/monokai';
import  AceEditor  from 'react-ace';
import 'ace-builds/src-noconflict/ace';




 import "ace-builds/src-noconflict/mode-javascript";
 import "ace-builds/src-noconflict/theme-monokai";
 import "ace-builds/src-noconflict/ext-language_tools";
export interface IDebugViewProps {

    /**
     * The debug content to display
     */
    content?: string;
}

export interface IDebugViewState {
}

export class DebugViewComponent extends React.Component<IDebugViewProps, IDebugViewState> {
    
    public render() {

         return (
            <>
            <div>Hi</div>
            </>
         );
         <Suspense fallback={""}><AceEditor
            width="100%"
            mode="javascript"
            theme="monokai"
            enableLiveAutocompletion={ true }
            showPrintMargin={ false }
            showGutter= { true }            
            value={ this.props.content }
            highlightActiveLine={ true }
            readOnly={ true }
            editorProps={
                {
                    $blockScrolling: Infinity,
                }
            }					
            name="CodeView"
        /></Suspense> ;
    }
}