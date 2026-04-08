# SNS Marketing Scheduler

Music Release Planner - 音楽アーティスト向けのSNS投稿スケジュール・AIローカライズ管理アプリ。

## 機能
- 週間スケジュールの管理と可視化
- リリース日を設定して自動戦略タイムラインを生成 (カウントダウン)
- Gemini 2.0 Flash を活用した自動の英語ローカライズ機能
- Buffer予約投稿に向けた出力機能
- プラットフォームごとのハッシュタグ管理
- 反響インサイトの分析・記録

## デプロイ方法 (GitHub + Vercel)

このプロジェクトは Vercel を使って誰でも簡単に無料で公開・共有できる設定になっています。

### Step 1: GitHubにプッシュ
1. GitHub で新しい空のリポジトリを作成します。
2. ターミナルで以下のコマンドを実行し、プロジェクトをGitHubにアップロードします。

```bash
# （初期化されていない場合）
git init
git add .
git commit -m "Initial commit: Ready for Vercel deployment"

# GitHubのURLに接続してプッシュ (大文字のYOUR_USERNAMEとREPO_NAMEを置き換えてください)
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

### Step 2: Vercelでデプロイ
1. [Vercel](https://vercel.com/) にアクセスし、GitHubアカウントでログインします。
2. 「**Add New**」 > 「**Project**」をクリックします。
3. あなたのGitHubから先ほど作成したリポジトリ（`sns-scheduler`等）を選択し、「**Import**」をクリックします。
4. **Framework Preset** は自動的に `Vite` に設定されます。
5. （環境変数等は不要なので）そのまま「**Deploy**」ボタンを押します！
6. 数十秒待つだけで、自分専用の共有URL（`https://xxx.vercel.app`）が発行されます。

### Step 3: 更新の自動化
以降は、ローカルでコードを修正し `git push` するだけで、自動的にVercelが再ビルドを行い、常に最新のアプリが本番URLに公開され続けます！

---
*Developed with React, Vite, and Google Gemini API.*
