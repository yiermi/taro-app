import Taro, {Component} from '@tarojs/taro';
import {View, Text, Button} from '@tarojs/components';

class child extends Component {

  clickHandle() {
    this.props.onChange();
  }

  render(){
    return <View>
              <Button onClick={this.clickHandle}>子组件事件</Button>
              {this.props.name}
           </View>;
  }
}

child.defaultProps={
  name:null
}
export default child;