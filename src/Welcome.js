// import React from 'react';
// class Welcome extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             date: new Date(),
//             test: '1'
//         }
//         setInterval(()=>{
//             this.setState({
//                 date: new Date(),
//                 test: 'setInterval'
//             })
//         },5000)
//         console.log('我已经在constructer里将props和state初始化好了')
//     }
//         componentWillMount(){
//             this.setState({
//                 date: new Date(),
//                 test: 'componentWillMount'
//             })
//             console.log('运行这里的话,说明马上运行render了')
//         }
//         render(){
//             this.setState({
//                 date: new Date(),
//                 test: 'render'
//             })
//             console.log('嗯,这里是render')
//             return (
//                 <div>
//                     <h1>Hello,{this.props.name}</h1>
//                     <h2>{this.state.date.toString()}</h2>
//                     <p>{this.state.test}</p>
//                 </div>
//             )
//         }
//         componentDidMount(){
//             this.setState({
//                 date: new Date(),
//                 test: 'componentDidMount'
//             })
//             console.log('已经挂载到页面里了')
//         }
//         conponentWillReceiveProps(){
//             this.setState({
//                 date:new Date(),
//                 test: 'conponentWillReceiveProps'
//             })
//             return true
//         }
//         componentWilUnmount(){
//             console.log('累死了')
//         }
//     }

//     export default Welcome