# State Management

The Ghostfolio client application uses a service-based approach to state management, leveraging Angular's dependency injection system and RxJS for handling asynchronous data streams.

## Overview

Instead of using a dedicated state management library like NgRx or NGXS, the application relies on services to manage and share data across different components. This approach is simpler and often sufficient for applications of this size.

## Key Concepts

*   **Services**: Services are singleton classes that hold the application's state and business logic. They are injected into components that need access to the data or functionality they provide.
*   **RxJS**: RxJS is used to manage asynchronous operations and data streams. Services often expose data as Observables, which components can subscribe to in order to receive updates when the data changes.
*   **Subjects and BehaviorSubjects**: Services use RxJS Subjects and BehaviorSubjects to multicast data to multiple subscribers.
    *   A **Subject** is a special type of Observable that allows values to be multicasted to many Observers.
    *   A **BehaviorSubject** is a type of Subject that stores the current value and emits it to new subscribers.

## Example

Here is a simplified example of how a service might manage a piece of state:

```typescript
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly _data = new BehaviorSubject<string>('Initial Data');
  public readonly data$ = this._data.asObservable();

  public setData(newData: string): void {
    this._data.next(newData);
  }
}
```

In this example, the `DataService` has a private `BehaviorSubject` that holds the current data. It exposes an `Observable` (`data$`) that components can subscribe to. The `setData` method allows components to update the data.
