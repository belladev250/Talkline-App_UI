import React, { Component } from 'react';
import Share from './Share';
import Post from './Post';
import {Posts} from '../dummyData';
class Feed extends Component {
    
    render() { 
        return (
            <div className="w-2/4">
              <Share/>
              {Posts.map((p)=>(
               <Post key={p.id} post={p} />
              ))}
                
            </div>
        );
    }
}
 
export default Feed;