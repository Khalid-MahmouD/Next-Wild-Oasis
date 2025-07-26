'use client';

import { useState } from "react";

export default function Counter({user}) {
    const [count, setCount] = useState(user?.length || 0);
    return (
        <button
            onClick={() => setCount(c => c + 1)}
        >
            Count: {count}
        </button>
    );
} 

// interactivity means client component
// 