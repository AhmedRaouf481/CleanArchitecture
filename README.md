### Clean Architecture: TypeScript Express API
By employing clean architecture, you can design applications with very low coupling and independent of technical implementation details. That way, the application becomes easy to maintain and flexible to change. Clean architecture allows us to create architectural boundaries between dependencies which allows components to be swapped in and out and be intrinsically testable.


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

The presentation layer would mainly be used for inputting and outputting user data (API routes).

The inner core domain layer holds all business logic (use cases, services).

The data layer holds all infrastructure implementations (data sources).