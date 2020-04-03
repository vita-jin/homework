import React from 'react'

class TodoItem extends React.Component {
    constructor(props){
        super(props)
        this.delete = this.delete.bind(this)
    }
    delete() {
        const { deletes , index } = this.props
        deletes(index)
    }
    togglecomplete(){
        const {changecomplete,index} = this.props;
        console.log('改变状态')
        changecomplete(index)
    }
    render() {
        const {content,isdone} = this.props;
        return (
            <div className='itemshow'>
                <input type = 'checkbox' checked={this.props.isdone} onClick={()=>this.togglecomplete()}  onChange={()=>{}}></input>
                <li className={isdone==true?'isdone':null}>{content}</li>
                <button  onClick={this.delete}>删除</button>
            </div>
        )
    }
}
export default TodoItem                                                                             