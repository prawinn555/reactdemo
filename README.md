# Learn how to use React.js to build a Web App with RESTful service.

Hi, Welcome to my project.
Here, you will find example code to create a web app, using the following frameworks

* NodeJS as the server
* React Javascript library


Our Web app will call a simple REST service to manage products

* create a simple object ( product)
* list products
* update a product
* delete a product

The REST service is another project.  The service is deployed here 
 [Live service](https://nodejsdemo.glitch.me/).
 



## Online live demo

Visit [Live demo](https://reactdemo.glitch.me/), powered by Glitch

## Code

From [Github](https://github.com/prawinn555/reactdemo)


## Installation


### Prerequisites

* Install NodeJS

### Installation


```
git clone https://github.com/prawinn555/reactdemo
cd reactdemo/
npm install
 
```

* Change your database URL in the file .env. 


```
TODO

```

* Run the application

```
node start
 
```


## Understand the code

* The bootstap is index.js

* The script index.js will generate the HTML page from index.html.
The module App is call, and the content is put in the root element in index.html.

```
ReactDOM.render(<App />, document.getElementById("root"));
```
* The module App (App.js) renders the following content.

```
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} />
      </div>
```

* The related modules ( SearchInput & EmojiResults) are invoked to render their contents.


* The SearchInput module renders its content as follows 

```
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} />
      </div>
```

* The EmojiResults module renders its content as follows 

```
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} />
      </div>
```




## Acknowledgments

* All framework contributors

