import React from 'react'
import Input from "../components/input/input";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class Editor extends React.Component<any, any> {
    state = {
        value: ""
    }

    hadleEditer=(html):void=>{
        this.setState({value:html})
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {

        return (
            <section className='px-28'>
                <div className={'text-right mt-5'}>
                    <button className={'second-btn mr-1'}>Clear</button>
                    <button className={'main-btn ml-1'}>Publish</button>
                </div>
                <div>
                    <Input type={'title'} name="title" label="Title" placeholder="Enter your Title" optional={true} />

                    {/* Rich Text editor */}
                    <div className={'m-2'}>
                        <ReactQuill theme="snow" value={this.state.value} onChange={this.hadleEditer} />
                    </div>
                </div>
            </section>
        )
    }
}

export default Editor;