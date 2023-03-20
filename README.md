### Clean Architecture: TypeScript Express API
By employing clean architecture, you can design applications with very low coupling and independent of technical implementation details. That way, the application becomes easy to maintain and flexible to change. Clean architecture allows us to create architectural boundaries between dependencies which allows components to be swapped in and out and be intrinsically testable.


## Installation

**1. Clone the repo:**

```shell
git clone https://github.com/AhmedRaouf481/CleanArchitecture.git
```

**2. Move the project's directory:**

```shell
cd CleanArchitecture/
```

**3. Copy `.env.example` file into `.env` file and fill it with your environment variables:**

```shell
cp .env.example .env
```

### Using npm

**_Make sure you have Node.js, PostgreSQL, and MySQL installed_**

```shell
node -v
npm -v
psql -V
prisma -V
```

**4. Install the needed npm packages:**

```shell
npm install
```

**5. Build the application:**

```shell
npm run build
```

**6. Start the application:**

```shell
npm start
```
### Folder Structure
Let's use files and folders to structure our application. Doing this allows us to communicate architecture intent:

```
/src
│── index.ts
│── presentation
│   ├── controllers
│   │   └── UserController.ts
│   └── routers
│       └── userRouter.ts
├── domain
│   ├── interfaces
│   │   └── userModel.ts
│   ├── services
│   │   └── UserServices.ts
│   └── use-cases
│       └── user
│           └── UserUseCases.ts
└── data
    ├── interfaces
    │   └── userDbInterface.ts
    └── data-access
        └── UserDataAccess.ts
```

- The presentation layer would mainly be used for inputting and outputting user data (API routes).

- The inner core domain layer holds all business logic (use cases, services).

- The data layer holds all infrastructure implementations (data sources).