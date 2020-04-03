import React from 'react';

class TodoFooter extends React.Component {
    constructor(props) {
        super(props)
    }
    cleardoneitem(){
        this.props.clearitem(true)
    }
    showdoned(flag){
        this.props.showdoned(flag)  
    }
    render() {
        return (
            <div className='footer'>
                <span className='notdone'>还剩下{this.props.info}个未完成</span>
                <button onClick={()=>this.showdoned('all')}>全部任务</button>
                <button onClick={()=>this.showdoned('undone')}>待完成</button>
                <button onClick={()=>this.showdoned('done')}>已完成</button>
                <span className='cleardone' onClick={()=>this.cleardoneitem()}>清空已完成</span>
            </div>
        )
    }
}
export default TodoFooter