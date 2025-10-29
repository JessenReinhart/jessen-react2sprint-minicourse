
import type { Module } from '../types';

export const courseData: Module[] = [
  {
    title: 'Module 1: Getting Started',
    lessons: [
      {
        title: 'What is Spring Boot?',
        steps: [
          { type: 'heading', content: 'Introduction to Spring Boot' },
          {
            type: 'text',
            content:
              "Welcome! If you're coming from the React world, think of Spring Boot as the `create-react-app` or `Vite` for Java backend development. It's a framework designed to get you up and running with a production-ready application as quickly as possible.",
          },
          {
            type: 'text',
            content:
              'Spring Boot handles a lot of the boilerplate configuration for you, so you can focus on writing your business logic. This is similar to how `create-react-app` sets up Webpack, Babel, and ESLint for you, letting you jump straight into building components.',
          },
          { type: 'analogy', content: {
              reactConcept: '`create-react-app` / `Vite`',
              springConcept: 'Spring Boot',
              explanation: 'Both are opinionated starter tools that provide sensible defaults and auto-configuration to rapidly start a new project without complex setup.'
          }},
          { type: 'text', content: 'Key features of Spring Boot include:' },
          {
            type: 'text',
            content:
              "<ul><li class='ml-6 my-2 list-disc'><b>Auto-configuration:</b> It automatically configures your application based on the dependencies (libraries) you've added.</li><li class='ml-6 my-2 list-disc'><b>Embedded Servers:</b> It includes embedded web servers like Tomcat, so you don't need to deploy your application to an external server to run it. Just hit 'run' and it works!</li><li class='ml-6 my-2 list-disc'><b>Dependency Management:</b> It simplifies managing your project's dependencies, much like `npm` or `yarn` does with `package.json`.</li></ul>",
          },
        ],
      },
      {
        title: 'Your First Project',
        steps: [
          { type: 'heading', content: 'Using Spring Initializr' },
          {
            type: 'text',
            content:
              'The easiest way to start a Spring Boot project is with the Spring Initializr. It’s a web tool that generates a complete project structure for you. It’s the equivalent of running `npx create-react-app my-app --template typescript`.',
          },
          {
            type: 'text',
            content:
              "Let's create a simple 'Hello World' project. Go to <a href='https://start.spring.io' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline'>start.spring.io</a> and configure your project with the following settings:",
          },
          {
            type: 'text',
            content:
             "<ul><li class='ml-6 my-2 list-disc'><b>Project:</b> Maven</li><li class='ml-6 my-2 list-disc'><b>Language:</b> Java</li><li class='ml-6 my-2 list-disc'><b>Spring Boot:</b> Select a recent stable version (e.g., 3.2.x).</li><li class='ml-6 my-2 list-disc'><b>Project Metadata:</b><ul class='ml-6 list-inside list-disc'><li>Group: `com.example`</li><li>Artifact: `democourse`</li><li>Name: `democourse`</li><li>Packaging: Jar</li><li>Java: 17 or newer</li></ul></li><li class='ml-6 my-2 list-disc'><b>Dependencies:</b> Click 'Add Dependencies' and add `Spring Web` and `Thymeleaf`.</li></ul>",
          },
          {
            type: 'text',
            content: "Click 'Generate'. This will download a `.zip` file. Unzip it and open it in your favorite IDE (like IntelliJ IDEA or VS Code with Java extensions)."
          }
        ],
      },
      {
        title: 'Running the Server',
        steps: [
          { type: 'heading', content: 'Bringing Your Application to Life' },
          {
            type: 'text',
            content:
              "You've generated a project, and now it's time for the magic moment: running it. One of Spring Boot's most powerful features is its embedded web server. In the React world, `vite` or `create-react-app` bundles a development server for you. Spring Boot does the same, embedding a server (like Tomcat) directly into your application. You don't need to install anything separately!",
          },
          { type: 'heading', content: 'Method 1: Running from Your IDE (Recommended)' },
          {
            type: 'text',
            content:
              "The simplest way to run your app during development is directly from your Integrated Development Environment (IDE).<br/><br/>Navigate to the `DemocourseApplication.java` file located in `src/main/java/com/example/democourse/`. Inside this file, you'll see a `public static void main(String[] args)` method. Modern IDEs like IntelliJ IDEA and VS Code (with the Java Extension Pack) will show a small green 'play' or 'run' button next to the line numbers. Click this button and select 'Run DemocourseApplication.main()'.",
          },
          {
            type: 'text',
            content:
              "Your IDE will open a console or terminal panel and you'll see a lot of logs. This is Spring Boot starting up. The key lines to look for near the end are: <br/> `... Tomcat initialized with port(s): 8080 (http)` <br/> `... Started DemocourseApplication in X.XXX seconds`",
          },
          { type: 'analogy', content: {
              reactConcept: '`npm run dev` or `vite`',
              springConcept: "Click 'Run' in IDE / `./mvnw spring-boot:run`",
              explanation: "Both commands start a local development server, making your application accessible in the browser. Spring Boot's embedded server is like the dev server Vite or `create-react-app` provides. With an additional dependency (devtools), it can even support hot-reloading!"
          }},
          { type: 'heading', content: 'Method 2: Running from the Command Line' },
          {
            type: 'text',
            content:
              "You can also run the application from your terminal. Your generated project includes a 'Maven Wrapper' (`mvnw` and `mvnw.cmd`). This is a script that automatically downloads and uses the correct version of Maven for your project, similar to how a `package-lock.json` file ensures everyone on your team uses the same dependency versions.",
          },
          {
            type: 'code',
            content: {
              language: 'bash',
              fileName: 'Terminal',
              code: `# On macOS or Linux
./mvnw spring-boot:run

# On Windows (Command Prompt or PowerShell)
mvnw.cmd spring-boot:run`
            },
          },
          {
            type: 'text',
            content:
              'This command compiles your Java code and starts the application, just like running from the IDE. You will see the same log output in your terminal.',
          },
          { type: 'heading', content: 'Viewing the Result' },
          {
            type: 'text',
            content:
              "Once the server is running, open your web browser and navigate to `http://localhost:8080`. You should see a generic 'Whitelabel Error Page'. <strong>This is a good sign!</strong> It means your server is running correctly, but we haven't told it what to do when someone visits the root URL. We'll fix that in the next module when we create our first Controller.",
          },
          { type: 'quiz', content: {
              question: 'What command would you use to run your Spring Boot application from the terminal in a macOS/Linux environment?',
              options: ['npm start', './mvnw spring-boot:run', 'java -jar app.jar', 'run server'],
              correctAnswerIndex: 1,
              explanation: 'The Maven Wrapper (`mvnw`) provides a script to execute Maven goals. `spring-boot:run` is the specific goal from the Spring Boot plugin to compile and run the application in one step.'
          }}
        ]
      }
    ],
  },
  {
    title: 'Module 2: Core Concepts',
    lessons: [
      {
        title: 'Project Structure',
        steps: [
            { type: 'heading', content: 'Understanding the Layout' },
            {
                type: 'text',
                content:
                "After unzipping the project, you'll see a structure that might look different from a React project. Let's break it down.",
            },
            {
                type: 'code',
                content: {
                language: 'text',
                fileName: 'Project Structure',
                code: `democourse
├── .mvn/
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com/example/democourse
│   │   │       └── DemocourseApplication.java  // <-- Your main entry point
│   │   └── resources
│   │       ├── static/          // For CSS, JS, images
│   │       ├── templates/       // For Thymeleaf HTML files
│   │       └── application.properties // Configuration
│   └── test
│       └── java
├── mvnw
├── mvnw.cmd
└── pom.xml                  // <-- Like package.json`,
                },
            },
            { type: 'analogy', content: {
              reactConcept: '`package.json`',
              springConcept: '`pom.xml` (Maven)',
              explanation: 'Both files define project metadata and manage dependencies. `npm install` is analogous to Maven downloading dependencies when you build.'
            }},
            { type: 'analogy', content: {
              reactConcept: '`src/index.tsx`',
              springConcept: '`DemocourseApplication.java`',
              explanation: 'These are the entry points of your application where execution begins.'
            }},
            { type: 'analogy', content: {
              reactConcept: '`public/` folder',
              springConcept: '`src/main/resources/static/`',
              explanation: 'Both folders are used for serving static assets like images, CSS stylesheets, and JavaScript files.'
            }},
        ]
      },
      {
        title: 'Controllers & Routing',
        steps: [
            { type: 'heading', content: 'Handling Web Requests' },
            { type: 'text', content: "In React, you use a library like React Router to map URLs to components. In Spring Boot, you use Controllers to map URLs to methods." },
            { type: 'analogy', content: {
              reactConcept: 'React Component with Routes',
              springConcept: '`@RestController` or `@Controller`',
              explanation: 'A Controller is a Java class that handles incoming web requests, similar to how a React component renders UI for a specific route.'
            }},
            { type: 'text', content: "Let's create a simple controller. Create a new file `HelloController.java` inside the `com.example.democourse` package." },
            { type: 'code', content: {
                language: 'java',
                fileName: 'src/main/java/com/example/democourse/HelloController.java',
                code: `package com.example.democourse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller // Tells Spring this class handles web requests
public class HelloController {

    @GetMapping("/") // Maps HTTP GET requests for "/" to this method
    @ResponseBody   // Returns the string as the response body, not a template name
    public String sayHello() {
        return "Hello, from Spring Boot!";
    }
}`
            }},
            { type: 'text', content: "Now, run your application using the methods from the previous lesson. Once it starts, go to `http://localhost:8080` in your browser. You should see 'Hello, from Spring Boot!'." },
            { type: 'quiz', content: {
                question: 'Which annotation is used to map a URL path to a controller method for an HTTP GET request?',
                options: ['@RequestMapping', '@GetRequest', '@GetMapping', '@Controller'],
                correctAnswerIndex: 2,
                explanation: '`@GetMapping` is a specific annotation for handling HTTP GET requests. `@RequestMapping` is more general, and `@Controller` marks the class itself.'
            }}
        ],
      },
    ],
  },
  {
    title: 'Module 3: Thymeleaf Templating',
    lessons: [
        {
            title: 'Intro to Thymeleaf',
            steps: [
                { type: 'heading', content: 'Server-Side Rendering with Java' },
                { type: 'text', content: "Thymeleaf is a template engine. It lets you write HTML files that can be processed on the server to include dynamic data. This is Server-Side Rendering (SSR)." },
                { type: 'analogy', content: {
                    reactConcept: 'JSX/TSX `{variable}` syntax',
                    springConcept: 'Thymeleaf `th:*` attributes',
                    explanation: "Both are ways to embed dynamic data and logic directly into your view layer. JSX does this on the client (or during a build step for SSR like Next.js), while Thymeleaf does it on the server before sending the HTML to the client."
                }},
                { type: 'text', content: "Let's modify our controller to use a Thymeleaf template. First, remove `@ResponseBody` as we now want to render a view, not just return a string." },
                { type: 'code', content: {
                    language: 'java',
                    fileName: 'src/main/java/com/example/democourse/HelloController.java',
                    code: `package com.example.democourse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model; // Import Model
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam; // Import RequestParam

@Controller
public class HelloController {

    @GetMapping("/")
    public String sayHello(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("userName", name); // Add data to the model
        return "greeting"; // Return the name of the template file
    }
}`
                }},
                { type: 'text', content: "In this updated code, we're doing a few new things:<ul><li class='ml-6 my-2 list-disc'><b>`Model` object:</b> This is like passing `props` to a React component. We use `model.addAttribute()` to pass data to our view.</li><li class='ml-6 my-2 list-disc'><b>`@RequestParam`:</b> This is how you handle URL query parameters, similar to using `useSearchParams` in React Router.</li><li class='ml-6 my-2 list-disc'><b>Return `\"greeting\"`:</b> This tells Spring Boot to find and render a file named `greeting.html` in the `src/main/resources/templates` directory.</li></ul>" },
                 { type: 'text', content: "Now create the template file:" },
                { type: 'code', content: {
                    language: 'html',
                    fileName: 'src/main/resources/templates/greeting.html',
                    code: `<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <title>Greeting</title>
</head>
<body>
    <h1 th:text="'Hello, ' + &#36;{userName} + '!'">Hello, User!</h1>
</body>
</html>`
                }},
                { type: 'text', content: "The key part is `th:text=\"'Hello, ' + &#36;{userName} + '!'\"`. The `th:text` attribute replaces the content of the `<h1>` tag with the value of the expression. `&#36;{userName}` is how we access the `userName` attribute we added to the model in the controller. The text 'Hello, User!' inside the tag is just a placeholder for when you view the file in a browser directly." },
                { type: 'text', content: "Restart your application and visit `http://localhost:8080`. You should see 'Hello, World!'. Now try visiting `http://localhost:8080?name=ReactDev`. The message will update dynamically!" },
            ]
        },
        {
            title: 'Displaying Lists',
            steps: [
                { type: 'heading', content: 'Rendering Dynamic Lists' },
                { type: 'text', content: "A common task is rendering a list of items, like in React when you `.map()` over an array to create a list of `<li>` elements. In Thymeleaf, we use the `th:each` attribute for this." },
                 { type: 'analogy', content: {
                    // Fix: Changed backticks to single quotes to avoid TSX parsing issues in a .ts file.
                    reactConcept: 'myArray.map(item => <li key={item.id}>{item.name}</li>)',
                    // Fix: Changed to single quotes and corrected the Thymeleaf variable syntax.
                    springConcept: '<li th:each="item : ${myArray}" th:text="${item.name}"></li>',
                    explanation: "Both constructs iterate over a collection of data (`myArray`) and render a piece of markup for each item in the collection."
                }},
                { type: 'text', content: "Let's create a simple To-Do List application. First, we need a controller to manage our to-do items." },
                { type: 'code', content: {
                    language: 'java',
                    fileName: 'src/main/java/com/example/democourse/TodoController.java',
                    code: `package com.example.democourse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
public class TodoController {

    private List<String> todos = new ArrayList<>();

    public TodoController() {
        // Add some initial data
        todos.add("Learn Spring Boot");
        todos.add("Build a To-Do App");
        todos.add("Deploy to the cloud");
    }

    @GetMapping("/todos")
    public String getTodos(Model model) {
        model.addAttribute("todos", todos);
        return "todos"; // Renders todos.html
    }
}`
                }},
                { type: 'text', content: "This controller has an in-memory `List` of strings to act as our data store for now. The `/todos` endpoint adds this list to the model and renders a `todos.html` template." },
                { type: 'text', content: "Now, create the `todos.html` file:" },
                { type: 'code', content: {
                    language: 'html',
                    fileName: 'src/main/resources/templates/todos.html',
                    code: `<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <title>My To-Do List</title>
</head>
<body>
    <h1>To-Do List</h1>
    <ul>
        <li th:each="todo : &#36;{todos}" th:text="&#36;{todo}">
            Placeholder To-Do Item
        </li>
    </ul>
</body>
</html>`
                }},
                { type: 'text', content: "The `th:each=\"todo : &#36;{todos}\"` attribute iterates over the `todos` list from our model. For each item in the list, it creates a new `<li>` element. The `todo` variable holds the current item for each iteration, which we then display using `th:text=\"&#36;{todo}\"`." },
                 { type: 'text', content: "Restart the application and visit `http://localhost:8080/todos`. You'll see your list of to-do items rendered dynamically!" },
            ]
        }
    ]
  },
  {
      title: 'Module 4: Handling Forms',
      lessons: [
          {
              title: 'Creating and Processing Forms',
              steps: [
                  { type: 'heading', content: 'Adding New To-Do Items' },
                  { type: 'text', content: "Static lists are great, but real applications need user input. Let's add a form to our To-Do app to allow users to add new items. This is similar to handling form state and `onSubmit` events in React." },
                  { type: 'analogy', content: {
                      // Fix: Changed backticks to single quotes to avoid TSX parsing issues and escaped the inner single quote.
                      reactConcept: 'const [input, setInput] = useState(\'\');\n<form onSubmit={handleSubmit}>...',
                      springConcept: 'Thymeleaf form with th:object and th:field',
                      explanation: "In React, you manage form state with hooks. In Thymeleaf, you bind an object from your model to the form, and Spring handles mapping the submitted data back to a Java object."
                  }},
                  { type: 'text', content: "First, update `todos.html` to include a form." },
                  { type: 'code', content: {
                      language: 'html',
                      fileName: 'src/main/resources/templates/todos.html',
                      code: `<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <title>My To-Do List</title>
</head>
<body>
    <h1>To-Do List</h1>
    <ul>
        <li th:each="todo : &#36;{todos}" th:text="&#36;{todo}">
            Placeholder To-Do Item
        </li>
    </ul>

    <h2>Add a new item</h2>
    <form action="/todos" method="post">
        <input type="text" name="item" />
        <button type="submit">Add</button>
    </form>
</body>
</html>`
                  }},
                  { type: 'text', content: "This is a standard HTML form that sends a `POST` request to the `/todos` URL. The `name=\"item\"` on the input is crucial; it's the key Spring will use to find the submitted value." },
                  { type: 'text', content: "Next, we need a controller method to handle this `POST` request." },
                  { type: 'code', content: {
                      language: 'java',
                      fileName: 'src/main/java/com/example/democourse/TodoController.java',
                      code: `package com.example.democourse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping; // Import PostMapping
import org.springframework.web.bind.annotation.RequestParam; // Import RequestParam

import java.util.ArrayList;
import java.util.List;

@Controller
public class TodoController {

    private List<String> todos = new ArrayList<>();

    // ... (constructor and getTodos method) ...

    @GetMapping("/todos")
    public String getTodos(Model model) {
        model.addAttribute("todos", todos);
        return "todos";
    }

    @PostMapping("/todos")
    public String addTodo(@RequestParam("item") String newItem) {
        this.todos.add(newItem);
        return "redirect:/todos"; // Redirect back to the list
    }
}`
                  }},
                  { type: 'text', content: "Here's the breakdown:<ul><li class='ml-6 my-2 list-disc'><b>`@PostMapping(\"/todos\")`:</b> This annotation maps HTTP `POST` requests for `/todos` to this method.</li><li class='ml-6 my-2 list-disc'><b>`@RequestParam(\"item\") String newItem`:</b> This tells Spring to take the value from the form input named `item` and put it into the `newItem` string variable.</li><li class='ml-6 my-2 list-disc'><b>`return \"redirect:/todos\";`</b> This is very important. After adding the item, we don't want to render a new page. We want to tell the browser to make a new `GET` request to `/todos`. This is a standard pattern called Post/Redirect/Get (PRG) that prevents duplicate form submissions if the user refreshes the page.</li></ul>" },
                  { type: 'quiz', content: {
                      question: "What is the purpose of `return \"redirect:/todos\";` after handling a form submission?",
                      options: [
                          'To render the todos.html template again with the new data.',
                          'To send a redirect instruction to the browser, causing it to request the /todos page again.',
                          'To directly call the getTodos() method within the controller.',
                          'To display a confirmation message on a new page.'
                      ],
                      correctAnswerIndex: 1,
                      explanation: 'The "redirect:" prefix tells Spring to issue an HTTP redirect response. This follows the Post/Redirect/Get pattern, which is a best practice for web applications to avoid issues with browser reloads after a POST request.'
                  }}
              ]
          }
      ]
  },
  {
    title: 'Module 5: Data Persistence with JPA',
    lessons: [
      {
        title: 'Intro to JPA & Databases',
        steps: [
          { type: 'heading', content: 'Moving Beyond In-Memory Lists' },
          { type: 'text', content: "Our current To-Do list is stored in memory, which means every time we restart the application, all our data is lost. To make our data permanent, we need a database. Spring Boot makes database access incredibly simple using Spring Data JPA." },
          { type: 'text', content: "JPA stands for Jakarta Persistence API (formerly Java Persistence API). It's a standard specification that describes how to map Java objects to relational database tables. This is a form of Object-Relational Mapping (ORM)." },
          { type: 'analogy', content: {
              reactConcept: 'Prisma / TypeORM',
              springConcept: 'Spring Data JPA (with Hibernate)',
              explanation: "Both are ORMs that let you work with your database using familiar objects and classes (like TypeScript classes or Java POJOs) instead of writing raw SQL queries. You define a schema/model, and the ORM handles the database communication."
          }},
          { type: 'text', content: "We'll use an in-memory database called H2 for simplicity. It requires no installation and runs inside our application, but we can easily switch to a real database like PostgreSQL or MySQL later." },
          { type: 'text', content: "First, let's add the required dependencies to our `pom.xml`. You would typically do this using the Spring Initializr, but you can also add them manually." },
          { type: 'code', content: {
              language: 'xml',
              fileName: 'pom.xml (additions)',
              code: `<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>runtime</scope>
</dependency>`
          }},
        ]
      },
      {
        title: 'Creating an Entity',
        steps: [
          { type: 'heading', content: 'Mapping Objects to Tables' },
          { type: 'text', content: "An 'Entity' is a Java class that maps to a database table. Each instance of the class corresponds to a row in that table. We will create a `TodoItem` entity to represent our to-dos." },
          { type: 'analogy', content: {
              reactConcept: 'A TypeScript `interface` or `type` for your data',
              springConcept: 'A JPA `@Entity` class',
              explanation: "Both define the 'shape' of your data. An `@Entity` goes a step further by also telling the ORM how to store this data in a database table, including specifying primary keys and other constraints."
          }},
          { type: 'text', content: "Create a new file `TodoItem.java`." },
          { type: 'code', content: {
              language: 'java',
              fileName: 'src/main/java/com/example/democourse/TodoItem.java',
              code: `package com.example.democourse;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity // Marks this class as a JPA entity (i.e., maps to a table)
public class TodoItem {

    @Id // Marks this field as the primary key
    @GeneratedValue(strategy = GenerationType.AUTO) // Auto-generates the ID value
    private Long id;

    private String title;
    
    // JPA requires a no-arg constructor
    protected TodoItem() {}

    public TodoItem(String title) {
        this.title = title;
    }
    
    // Getters and Setters are needed by JPA
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
}`
          }},
          { type: 'text', content: "Key Annotations:<ul><li class='ml-6 my-2 list-disc'><b>`@Entity`:</b> Tells JPA that this class should be persisted to a database. By default, it will map to a table named `todo_item`.</li><li class='ml-6 my-2 list-disc'><b>`@Id`:</b> Specifies the primary key of the entity.</li><li class='ml-6 my-2 list-disc'><b>`@GeneratedValue`:</b> Configures the way the ID is generated. `AUTO` lets the persistence provider (Hibernate) choose the best strategy.</li></ul>" },
          { type: 'text', content: "Now we need to tell Spring Boot how to connect to our H2 database. Open `application.properties`:" },
           { type: 'code', content: {
              language: 'properties',
              fileName: 'src/main/resources/application.properties',
              code: `# H2 Database Settings
spring.h2.console.enabled=true

# Datasource Settings
spring.datasource.url=jdbc:h2:mem:tododb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=password

# JPA Settings
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.hibernate.ddl-auto=update`
          }},
          { type: 'text', content: "`spring.jpa.hibernate.ddl-auto=update` is very powerful. It tells Hibernate to automatically create or update the database schema based on your `@Entity` classes when the application starts." }
        ]
      },
      {
        title: 'Using Repositories',
        steps: [
            { type: 'heading', content: 'Abstracting Data Access' },
            { type: 'text', content: "How do we actually save, fetch, or delete `TodoItem` entities? We use a 'Repository'. In Spring Data JPA, a repository is an interface that provides CRUD (Create, Read, Update, Delete) operations out of the box." },
            { type: 'analogy', content: {
                reactConcept: 'A custom hook (`useApi`) or service class that encapsulates `fetch` calls',
                springConcept: 'A Spring Data `JpaRepository` interface',
                explanation: "Both provide a clean, reusable API for data operations. You call `repository.save()` instead of writing INSERT SQL, just like you'd call `api.post('/todos', data)` instead of crafting a full `fetch` request with headers and body."
            }},
            { type: 'text', content: "Create a new interface `TodoRepository.java`." },
            { type: 'code', content: {
                language: 'java',
                fileName: 'src/main/java/com/example/democourse/TodoRepository.java',
                code: `package com.example.democourse;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends JpaRepository<TodoItem, Long> {
    // That's it!
}`
            }},
            { type: 'text', content: "That's all the code we need! By extending `JpaRepository<TodoItem, Long>`, Spring Data JPA will automatically create a bean that implements all the standard database operations for our `TodoItem` entity (which has a `Long` as its ID type). We get methods like `save()`, `findById()`, `findAll()`, and `deleteById()` for free." },
            { type: 'text', content: "Now let's update our `TodoController` to use this repository instead of the in-memory list." },
            { type: 'code', content: {
                language: 'java',
                fileName: 'src/main/java/com/example/democourse/TodoController.java (Updated)',
                code: `package com.example.democourse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class TodoController {

    private final TodoRepository todoRepository;

    // Use dependency injection to get the repository
    public TodoController(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @GetMapping("/todos")
    public String getTodos(Model model) {
        model.addAttribute("todos", todoRepository.findAll());
        return "todos";
    }

    @PostMapping("/todos")
    public String addTodo(@RequestParam("item") String newItemTitle) {
        todoRepository.save(new TodoItem(newItemTitle));
        return "redirect:/todos";
    }
}`
            }},
            { type: 'text', content: "Finally, we need to update our `todos.html` template because we are now dealing with `TodoItem` objects, not simple strings." },
            { type: 'code', content: {
                language: 'html',
                fileName: 'src/main/resources/templates/todos.html (Updated)',
                code: `<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<!-- ... head ... -->
<body>
    <h1>To-Do List</h1>
    <ul>
        <!-- We now access the 'title' property of the todo object -->
        <li th:each="todo : &#36;{todos}" th:text="&#36;{todo.title}">
            Placeholder To-Do Item
        </li>
    </ul>
    <!-- ... form ... -->
</body>
</html>`
            }},
            { type: 'text', content: "Restart your application. Your To-Do list now persists! You can add items, restart the app, and they will still be gone because we are using an in-memory H2 database. To make it truly persistent, you'd switch the configuration to a file-based H2 or a real database like PostgreSQL." }
        ]
      }
    ]
  },
  {
      title: 'Module 6: Securing Your Application',
      lessons: [
          {
              title: 'Intro to Spring Security',
              steps: [
                  { type: 'heading', content: 'Protecting Your Application' },
                  { type: 'text', content: "Most real-world applications need security. You want to control who can see certain pages or perform certain actions. Spring Security is the standard for handling authentication (who are you?) and authorization (what are you allowed to do?) in Spring applications." },
                  { type: 'analogy', content: {
                      reactConcept: 'Protected Routes & JWTs',
                      springConcept: 'Spring Security',
                      explanation: "In a React SPA, you might use a Higher-Order Component or a custom hook to check for a JWT in localStorage before rendering a route. Spring Security does something similar on the server-side, intercepting requests before they reach your controller to ensure the user is authenticated."
                  }},
                  { type: 'text', content: "Adding Spring Security is incredibly easy. You just need to add one dependency to your `pom.xml`." },
                  { type: 'code', content: {
                      language: 'xml',
                      fileName: 'pom.xml (addition)',
                      code: `<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>`
                  }},
                  { type: 'text', content: "Simply by adding this dependency and restarting your application, your entire app is now protected! If you visit `http://localhost:8080/todos`, you'll be redirected to a default login page. Spring Security generates a password for the user `user` in the console on startup. Find it, log in, and you'll be able to access your app." }
              ]
          },
          {
              title: 'Custom Security Configuration',
              steps: [
                  { type: 'heading', content: 'Moving Beyond the Defaults' },
                  { type: 'text', content: "The default login page and auto-generated password aren't practical for a real application. We need to configure Spring Security to use our own login page and define our own users." },
                  { type: 'text', content: "Create a new class `SecurityConfig.java` to hold our security rules." },
                  { type: 'code', content: {
                      language: 'java',
                      fileName: 'src/main/java/com/example/democourse/SecurityConfig.java',
                      code: `package com.example.democourse;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests((requests) -> requests
                .requestMatchers("/", "/home").permitAll() // Allow access to home page
                .anyRequest().authenticated() // All other requests require authentication
            )
            .formLogin((form) -> form
                .loginPage("/login") // Use our custom login page
                .permitAll()
            )
            .logout((logout) -> logout.permitAll());

        return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails user = User.withDefaultPasswordEncoder()
            .username("user")
            .password("password")
            .roles("USER")
            .build();

        return new InMemoryUserDetailsManager(user);
    }
}`
                  }},
                  { type: 'text', content: "Whoa, that's a lot! Let's break it down:<ul><li class='ml-6 my-2 list-disc'><b>`securityFilterChain` bean:</b> This is the main configuration block. We use a fluent API to define rules. Here, we're saying 'permit all requests to `/` and `/home`, but any other request must be authenticated'.</li><li class='ml-6 my-2 list-disc'><b>`.formLogin()`:</b> This configures form-based authentication. We tell it our custom login page is at `/login` and that everyone is permitted to see it.</li><li class='ml-6 my-2 list-disc'><b>`userDetailsService` bean:</b> This is where we define our users. For now, we're creating a simple in-memory user with the username `user` and password `password`. In a real app, this would fetch user details from a database.</li></ul>" },
              ]
          },
           {
              title: 'Creating the Login Page',
              steps: [
                  { type: 'heading', content: 'Building a Thymeleaf Login Form' },
                  { type: 'text', content: "Our configuration now points to `/login`, but that page doesn't exist yet. We need a controller mapping and a Thymeleaf template for it." },
                  { type: 'text', content: "First, create a simple controller for the login view." },
                  { type: 'code', content: {
                      language: 'java',
                      fileName: 'src/main/java/com/example/democourse/ViewController.java',
                      code: `package com.example.democourse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {
    @GetMapping("/login")
    public String login() {
        return "login";
    }
}`
                  }},
                  { type: 'text', content: "Now, create the `login.html` template. This form is special: Spring Security expects the `username` and `password` fields to have those specific names." },
                  { type: 'code', content: {
                      language: 'html',
                      fileName: 'src/main/resources/templates/login.html',
                      code: `<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <title>Login</title>
</head>
<body>
    <h1>Login</h1>
    <!-- Show error message if login fails -->
    <div th:if="&#36;{param.error}">
        Invalid username and password.
    </div>
    <!-- Show message after logging out -->
    <div th:if="&#36;{param.logout}">
        You have been logged out.
    </div>
    
    <form th:action="@{/login}" method="post">
        <div>
            <label> Username : <input type="text" name="username"/> </label>
        </div>
        <div>
            <label> Password: <input type="password" name="password"/> </label>
        </div>
        <div>
            <input type="submit" value="Sign In"/>
        </div>
    </form>
</body>
</html>`
                  }},
                  { type: 'text', content: "Restart the app. Now when you go to `/todos`, you'll be redirected to your custom login page. You can log in with `user` and `password` to see your list." },
                  { type: 'text', content: "Finally, let's add a logout button. We need to add the `thymeleaf-extras-springsecurity6` dependency to `pom.xml` to get security-aware tags." },
                   { type: 'code', content: {
                      language: 'xml',
                      fileName: 'pom.xml (addition)',
                      code: `<dependency>
    <groupId>org.thymeleaf.extras</groupId>
    <artifactId>thymeleaf-extras-springsecurity6</artifactId>
</dependency>`
                  }},
                  { type: 'text', content: "Update `todos.html` to show the user's name and a logout form." },
                  { type: 'code', content: {
                      language: 'html',
                      fileName: 'src/main/resources/templates/todos.html (Final)',
                      code: `<!DOCTYPE html>
<!-- Add sec namespace -->
<html xmlns:th="http://www.thymeleaf.org" xmlns:sec="http://www.thymeleaf.org/extras/spring-security">
<head>
    <title>My To-Do List</title>
</head>
<body>
    <div sec:authorize="isAuthenticated()">
        Hello, <span sec:authentication="name">User</span>!
        <form th:action="@{/logout}" method="post" style="display:inline;">
            <button type="submit">Logout</button>
        </form>
    </div>

    <h1>To-Do List</h1>
    <!-- ... list and form ... -->
</body>
</html>`
                  }},
                  { type: 'text', content: "The `sec:authorize=\"isAuthenticated()\"` block will only be rendered if a user is logged in. `sec:authentication=\"name\"` displays the username. Restart one last time, and you have a fully secured, database-backed To-Do list application! Congratulations!" }
              ]
          }
      ]
  },
  {
      title: 'Module 7: Deployment',
      lessons: [
          {
              title: 'Preparing for Production',
              steps: [
                  { type: 'heading', content: 'From Local to Live' },
                  { type: 'text', content: "Deploying an application means making it accessible on the internet. Before we do that, we need to make a few changes. We can't use an in-memory H2 database in production because it will be wiped out frequently. We need a real, persistent database." },
                  { type: 'text', content: "We will switch to PostgreSQL, a powerful open-source relational database that is well-supported by hosting providers like Render. First, add the PostgreSQL driver dependency to `pom.xml`." },
                  { type: 'code', content: {
                      language: 'xml',
                      fileName: 'pom.xml (add PostgreSQL driver)',
                      code: `<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
    <scope>runtime</scope>
</dependency>`
                  }},
                  { type: 'heading', content: 'Using Environment Variables' },
                  { type: 'text', content: "Hardcoding database credentials in `application.properties` is a bad practice. It's insecure and inflexible. The standard approach is to use environment variables, which are set by the hosting provider." },
                  { type: 'analogy', content: {
                      reactConcept: '`process.env.REACT_APP_API_KEY` in `.env` files',
                      springConcept: '`${DB_URL}` in `application.properties`',
                      explanation: "Both are ways to inject configuration into your application from the environment it's running in. This allows you to use different values for development, testing, and production without changing your code."
                  }},
                  { type: 'text', content: "Update `application.properties` to use placeholders for the database connection details. Spring Boot will automatically replace these with environment variables of the same name." },
                  { type: 'code', content: {
                      language: 'properties',
                      fileName: 'src/main/resources/application.properties (for production)',
                      code: `# Spring will use these environment variables for the database connection
spring.datasource.url=&#36;{SPRING_DATASOURCE_URL}
spring.datasource.username=&#36;{SPRING_DATASOURCE_USERNAME}
spring.datasource.password=&#36;{SPRING_DATASOURCE_PASSWORD}

# Tell JPA which SQL dialect to use
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect

# Allows Hibernate to manage the database schema (useful for initial setup)
spring.jpa.hibernate.ddl-auto=update`
                  }},
                  { type: 'text', content: "With these changes, our application is now configured to connect to any PostgreSQL database by simply setting the three `SPRING_DATASOURCE_*` environment variables." }
              ]
          },
          {
              title: 'Deploying to Render',
              steps: [
                  { type: 'heading', content: 'Going Live for Free' },
                  { type: 'text', content: "We'll use Render to deploy our app. It's a modern cloud platform with a great free tier for services like this. The first step is to make sure your project is pushed to a GitHub repository." },
                  { type: 'text', content: "<b>Step 1: Create a PostgreSQL Database on Render</b><br>Sign up for Render (you can use your GitHub account). From the dashboard, click 'New +' and select 'PostgreSQL'. Give it a unique name and choose the 'Free' plan. After it's created, go to its page and look for the 'Internal Database URL'. Copy this value; we'll need it soon." },
                  { type: 'text', content: "<b>Step 2: Create a Web Service on Render</b><br>Go back to the dashboard, click 'New +' and select 'Web Service'. Connect your GitHub account and choose the repository for this course project." },
                  { type: 'heading', content: 'Configuring the Service' },
                  { type: 'text', content: "Render will ask you to configure the service. Use the following settings:" },
                  { type: 'text', content: "<ul><li class='ml-6 my-2 list-disc'><b>Name:</b> A unique name for your app (e.g., `my-todo-app`).</li><li class='ml-6 my-2 list-disc'><b>Region:</b> Choose one close to you.</li><li class='ml-6 my-2 list-disc'><b>Branch:</b> `main` or `master`.</li><li class='ml-6 my-2 list-disc'><b>Runtime:</b> Select `Java`.</li><li class='ml-6 my-2 list-disc'><b>Build Command:</b> `./mvnw clean package`</li><li class='ml-6 my-2 list-disc'><b>Start Command:</b> `java -jar target/democourse-0.0.1-SNAPSHOT.jar`</li><li class='ml-6 my-2 list-disc'><b>Plan:</b> Make sure to select the `Free` tier.</li></ul>" },
                   { type: 'text', content: "The `target/democourse-0.0.1-SNAPSHOT.jar` part of the start command comes from the `artifactId` and `version` in your `pom.xml`. If you used a different name, adjust it accordingly." },
                  { type: 'heading', content: 'Adding Environment Variables' },
                  { type: 'text', content: "Before you create the service, click 'Advanced' to add your environment variables. This is where you connect your app to the database." },
                  { type: 'text', content: "Click 'Add Environment Group' and link the environment group from the PostgreSQL database you created earlier. This will automatically inject the database credentials into your application environment. Render is smart and will provide `SPRING_DATASOURCE_URL`, `SPRING_DATASOURCE_USERNAME`, and `SPRING_DATASOURCE_PASSWORD` for you when it detects a Spring Boot app." },
                  { type: 'text', content: "<b>Step 3: Deploy!</b><br>Click the 'Create Web Service' button. Render will now pull your code from GitHub, build the JAR file using the build command, and start your application using the start command. You can watch the logs live." },
                  { type: 'text', content: "Once the deployment is complete, Render will provide you with a public URL (like `https://my-todo-app.onrender.com`). Visit that URL, and you'll see your fully functional, database-backed, and secured To-Do application live on the internet! Congratulations, you've deployed a Spring Boot application!" }
              ]
          }
      ]
  }
];