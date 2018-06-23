import * as React from "react";
import './main.scss';

export default class MainContainer extends React.Component<{}> {
    public state: any;
    constructor(options: any) {
        super(options);

        this.state = {
            classNames: 'main-container folded',
            toggleClassName: '',
            folded: true,
        }
    };

    public action(): void {
        let { folded } = this.state
        
        this.setState({
            classNames: folded ? 'main-container' : 'main-container folded',
            folded: !folded
        })
    }

    public hover(): void {
        const { toggleClassName } = this.state;
        this.setState({
            toggleClassName: !toggleClassName ? 'active' : ''
        });
    }

    render() {
        const { classNames, toggleClassName, folded } = this.state;
        return (
            <section className={classNames}>
                {
                    folded ?
                        <h1 id='J_Action' className={toggleClassName} onClick={this.action.bind(this)} 
                        onMouseEnter={this.hover.bind(this)} 
                        onMouseLeave={this.hover.bind(this)}>Ys.Yancy</h1>
                    :
                        <div className = 'content-outer'>
                            <div className='header'>
                                <h1 onClick={this.action.bind(this)}>Yancy's Personal Website</h1>
                            </div>
                            <div className='content'></div>
                            <div className='footer'></div>
                        </div>
                }
            </section>
        )
    }
}