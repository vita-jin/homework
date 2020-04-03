import React from 'react';
import TodoItem from './TodoItem'
import Todofooter from './Todofooter'
class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      flag:'all'
    }
    this.handeldelete = this.handeldelete.bind(this)
    this.changecomplete = this.changecomplete.bind(this)
    this.clearitem = this.clearitem.bind(this)
    this.showdone = this.showdone.bind(this)
  }
  handeldelete(index) {
    console.log(index)
    const items = [...this.state.items]
    items.splice(index, 1)
    this.setState({ items })
  }
  additem(e) {
    if (e.keyCode == 13) {
      console.log(e.target.value)
      if (e.target.value.trim()) {
        const item = { text: e.target.value, isdone: false }
        this.setState({
          items: [...this.state.items, item]
        })
        e.target.value = ''
      }
    }
  }
  changecomplete(index) {
    this.state.items[index].isdone = !this.state.items[index].isdone
    console.log(index, this.state.items[index].isdone)
    this.setState({
      items:this.state.items
    })
  }
  undonenum() {
    let num = 0;
    this.state.items.forEach((e) => {
      if (!e.isdone) {
        num++
      }
    })
    return num
  }
  clearitem(flag) {
    if (flag) {
      console.log('ssssdd',this)
      const items = this.state.items.filter((e) => {
        if (!e.isdone) {
          return e
        }
      })
      this.setState({
        items: items
      })
    }
  }
  showdone(flag){
    this.setState({
      flag:flag
    })
  }
  render() {
    const undone = this.undonenum()
    return (
      <React.Fragment>
        {/* 如果觉得最外面包裹的东西无语义化，可以使用React.Fragment作为替代 */}
        <input className='iteminput' onKeyDown={(e) => this.additem(e)} placeholder='what needs to be done' />
        <ul>
          {
            this.state.items.map((item, index) => {
              if(this.state.flag==='all'){
                return (<TodoItem 
                  content={item.text} 
                  key={index} 
                  index={index} 
                  deletes={this.handeldelete} 
                  changecomplete={this.changecomplete} 
                  isdone={item.isdone} 
                  />)
              }else if(this.state.flag==='done'){
                if(item.isdone==true){
                  return (<TodoItem 
                    content={item.text} 
                    key={index} 
                    index={index} 
                    deletes={this.handeldelete} 
                    changecomplete={this.changecomplete} 
                    isdone={item.isdone} 
                    />)
                }
              }else{
                if(item.isdone==false){
                  return (<TodoItem 
                    content={item.text} 
                    key={index} 
                    index={index} 
                    deletes={this.handeldelete} 
                    changecomplete={this.changecomplete} 
                    isdone={item.isdone} 
                    />)
                }
              }

              // 父组件向子组件传值：父组件使用属性传值，子组件使用this.props.属性 来获取值
              // 子组件向父组件传值,父组件向子组件传递一个方法，子组件去调用父组件传来的方法
              // 在react中写行内样式的话，使用{{}}
            })
          }
        </ul>
        <Todofooter info={undone} clearitem={this.clearitem} showdoned={this.showdone}/>
      </React.Fragment>
    )
  }
}

export default TodoList;
