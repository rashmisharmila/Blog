import React from "react";
import Card from '../components/card/card';
import axios from 'axios';


interface Data {
  id: number,
  title: string,
  body: string
}



const data = [
  {
    id: 1,
    title: "IJSE",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
  },
  {
    id: 2,
    title: "GDSE",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
  },
  {
    id: 3,
    title: "Javascript",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
  },
  {
    id: 4,
    title: "Typescript",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
  },
  {
    id: 5,
    title: "Java",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
  },
  {
    id: 6,
    title: "Go",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
  },
];
class Home extends React.Component<any, any>{

  state = {
    data: []
  }

  
  fetchData=():void=>{

    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(result => {
    //     this.setState({ data: result })
    //     console.log(result)
    //   }).catch(err => {
    //     console.log(err)
    //   })

    axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
      this.setState({data:response.data});
    }).catch(err=>{
      console.log(err);
    })
  }
  componentDidMount(): void {
    this.fetchData();

  }

  render() {
    return (
      <div>
        <section>
          <div
            className={'grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-fit relative m-auto'}>

            {
              this.state.data.map((r: Data, index) => {
                return <Card title={r.title} content={r.body} />
              })
            }

          </div>
        </section>
      </div>

    );
  }
}

export default Home