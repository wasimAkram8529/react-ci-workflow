pipeline{
  agent any

  stages{
    stage("Build"){
      steps{
        sh 'npm run build'
      }
    }

    stage("Artifact build"){
      steps{
        archiveArtifacts artifacts: 'dist/**'
      }
    }
  }
}