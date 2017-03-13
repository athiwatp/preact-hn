import {h, Component} from 'preact';
import LoadingView from '../core/loadingView.js';
import ListItem from './item.js';

export default class ListView extends Component {
  render({data}) {
    if (!data || data === null) {
      return <LoadingView />;
    }

    const {items, entities} = data;
    return (
      <main>
        {Object.keys(items).map(item => {
          const itemAsInt = parseInt(item, 10);
          return <ListItem index={itemAsInt+1} entity={entities[items[itemAsInt]]} />;
        })}
      </main>
    );
  }  
}