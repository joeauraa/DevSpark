import { Language } from '../types';

export const languages: Language[] = [
  {
    id: 'javascript',
    name: 'JavaScript',
    extension: '.js',
    icon: '🟨',
    template: `// JavaScript Code Editor
console.log('Hello, World!');

// Try writing some code:
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('Developer'));`
  },
  {
    id: 'python',
    name: 'Python',
    extension: '.py',
    icon: '🐍',
    template: `# Python Code Editor
print('Hello, World!')

# Try writing some code:
def greet(name):
    return f'Hello, {name}!'

print(greet('Developer'))`
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    extension: '.ts',
    icon: '🔷',
    template: `// TypeScript Code Editor
console.log('Hello, World!');

// Try writing some code:
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

console.log(greet('Developer'));`
  },
  {
    id: 'html',
    name: 'HTML',
    extension: '.html',
    icon: '🌐',
    template: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Preview</title>
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }
    h1 { color: #2563eb; }
  </style>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>Edit this HTML and see the preview!</p>
</body>
</html>`
  },
  {
    id: 'css',
    name: 'CSS',
    extension: '.css',
    icon: '🎨',
    template: `/* CSS Code Editor */
body {
  font-family: system-ui, -apple-system, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

.container {
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  backdrop-filter: blur(10px);
}

h1 {
  font-size: 3rem;
  margin: 0;
}`
  },
  {
    id: 'java',
    name: 'Java',
    extension: '.java',
    icon: '☕',
    template: `// Java Code Editor
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");

        // Try writing some code:
        String message = greet("Developer");
        System.out.println(message);
    }

    public static String greet(String name) {
        return "Hello, " + name + "!";
    }
}`
  },
  {
    id: 'cpp',
    name: 'C++',
    extension: '.cpp',
    icon: '⚙️',
    template: `// C++ Code Editor
#include <iostream>
#include <string>

std::string greet(std::string name) {
    return "Hello, " + name + "!";
}

int main() {
    std::cout << "Hello, World!" << std::endl;

    // Try writing some code:
    std::cout << greet("Developer") << std::endl;

    return 0;
}`
  },
  {
    id: 'c',
    name: 'C',
    extension: '.c',
    icon: '🔧',
    template: `// C Code Editor
#include <stdio.h>

void greet(char* name) {
    printf("Hello, %s!\\n", name);
}

int main() {
    printf("Hello, World!\\n");

    // Try writing some code:
    greet("Developer");

    return 0;
}`
  },
  {
    id: 'ruby',
    name: 'Ruby',
    extension: '.rb',
    icon: '💎',
    template: `# Ruby Code Editor
puts 'Hello, World!'

# Try writing some code:
def greet(name)
  "Hello, #{name}!"
end

puts greet('Developer')`
  },
  {
    id: 'go',
    name: 'Go',
    extension: '.go',
    icon: '🔵',
    template: `// Go Code Editor
package main

import "fmt"

func greet(name string) string {
    return fmt.Sprintf("Hello, %s!", name)
}

func main() {
    fmt.Println("Hello, World!")

    // Try writing some code:
    fmt.Println(greet("Developer"))
}`
  },
  {
    id: 'rust',
    name: 'Rust',
    extension: '.rs',
    icon: '🦀',
    template: `// Rust Code Editor
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

fn main() {
    println!("Hello, World!");

    // Try writing some code:
    println!("{}", greet("Developer"));
}`
  },
  {
    id: 'php',
    name: 'PHP',
    extension: '.php',
    icon: '🐘',
    template: `<?php
// PHP Code Editor
echo "Hello, World!\\n";

// Try writing some code:
function greet($name) {
    return "Hello, $name!";
}

echo greet('Developer');
?>`
  },
  {
    id: 'swift',
    name: 'Swift',
    extension: '.swift',
    icon: '🦅',
    template: `// Swift Code Editor
print("Hello, World!")

// Try writing some code:
func greet(name: String) -> String {
    return "Hello, \\(name)!"
}

print(greet(name: "Developer"))`
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    extension: '.kt',
    icon: '🟣',
    template: `// Kotlin Code Editor
fun main() {
    println("Hello, World!")

    // Try writing some code:
    println(greet("Developer"))
}

fun greet(name: String): String {
    return "Hello, $name!"
}`
  },
  {
    id: 'sql',
    name: 'SQL',
    extension: '.sql',
    icon: '🗄️',
    template: `-- SQL Code Editor
SELECT 'Hello, World!' AS message;

-- Try writing some queries:
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email)
VALUES ('Developer', 'dev@example.com');

SELECT * FROM users;`
  },
  {
    id: 'json',
    name: 'JSON',
    extension: '.json',
    icon: '📋',
    template: `{
  "message": "Hello, World!",
  "data": {
    "name": "Developer",
    "language": "JSON",
    "year": 2024
  },
  "items": [
    "Code",
    "Test",
    "Deploy"
  ]
}`
  }
];
