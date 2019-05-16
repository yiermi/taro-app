import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.less'
import child from './child.js'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  state = {
    name: "张三",
    childName: "笨咪咪",
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  click() {
    this.setState({ name: "李四" }, () => {
      console.log(this.state.name);
    });
  }
  change() {
    this.setState({childName:"是傻逼"})
  }

  render() {
    return (
      <View className='index'>
        <Button onClick={this.click}>更改名字</Button>
        <Text>{this.state.name}</Text>
        <child name={this.state.childName} onChange={this.change.bind(this)}></child>
      </View>
    )
  }
}
