import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import AprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments" >
            <AprovalCard>
                <div>
                    <h4>
                    Are you sure yo want to do this?
                    </h4>
                </div>
            </AprovalCard>

            <AprovalCard>
                <CommentDetail author="Sam" 
                    timeAgo="Yesterday at 11:50PM" 
                    content="The blog is fantasty" 
                    avatar={faker.image.avatar()}
                />
            </AprovalCard>

            <AprovalCard>
            <CommentDetail author="Juan" 
                timeAgo="Today at 3:00AM" 
                content="Great code practice" 
                avatar={faker.image.avatar()}
            />
            </AprovalCard>

            <AprovalCard>
            <CommentDetail author="Ivan" 
                timeAgo="Today at 7AM" 
                content="I like the subject" 
                avatar={faker.image.avatar()}
            />
            </AprovalCard>
            
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))