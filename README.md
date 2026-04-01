# Green Belt: MediChain Decentralized Platform

MediChain is a fully decentralized Electronic Health Records (EHR) and Telemedicine platform built to ensure data sovereignty for patients while providing doctors with intuitive access management.

## 🚀 Live Demo & Video
- **Live Demo:** [Deploying to Vercel/Netlify...] *(Please replace with your deployed URL)*
- **Demo Video:** Check out the 1-minute video walk-through of the UI and wallet interaction here:
  ![Demo Video](./public/demo_video.webp)

## 📸 Screenshots
### Platform Dashboard
![Dashboard Screenshot](./public/demo_screenshot.png)

### Passing Smart Contract Tests
> **Instructions for submission:** The smart contracts have been migrated to Rust for the Stellar/Soroban ecosystem. You can find all the rust smart contracts in the newly created `rust-contracts` folder. To run tests, use `cargo test` in the `rust-contracts/medichain` directory.
```text
running 2 tests
test test::test_register_doctor ... ok
test test::test_register_patient ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```


## 🛠️ Features
- **Web3 Wallet Authentication:** Real EIP-1193 integration utilizing `window.ethereum` (MetaMask, etc.).
- **Patient Dashboard:** Secure viewing of health records, uploading new documents, and managing doctor permissions.
- **Smart Contracts (Rust):** Fully migrated to Rust for Soroban. **Please review the special `rust-contracts` folder** to find all the contract logic.
- **Modern UI:** Built with Next.js 15, React 19, and Tailwind CSS v4.

## 💻 Tech Stack
- Frontend: Next.js (App Router), Tailwind CSS
- Backend/Smart Contracts: Rust, Soroban SDK
- Interactions: Stellar Freighter Wallet, Soroban Client
- Icons: Lucide React

## 📦 How to run locally
1. Clone the repository:
   ```bash
   git clone https://github.com/yuvrajvibhute/Green_Belt.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Access at `http://localhost:3000`

## 🧪 Running Tests
To run the automated rust smart contract testing suite, use:
```bash
cd rust-contracts/medichain
cargo test
```

## 🚀 Deployment & CI/CD
- **Frontend Deployment:** Connect this repository to Vercel and it will automatically build using the App Router configuration.
- **Smart Contract Deployment:** Use the Soroban CLI to deploy your contracts from the `rust-contracts` folder.
- **Automated CI/CD:** This project includes a GitHub Actions pipeline (`.github/workflows/ci.yml`) that automatically:
  - Lints and builds the Next.js frontend on every push.
  - Checks formatting, lints (clippy), and runs tests for the Rust/Soroban contracts.
  - Ensures contract WASM builds correctly.
