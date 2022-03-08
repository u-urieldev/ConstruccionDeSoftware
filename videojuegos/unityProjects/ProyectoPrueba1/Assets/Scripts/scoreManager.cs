using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class scoreManager : MonoBehaviour
{   
    public Text scoreText;
    public static scoreManager instance;
    int score = 0;

    private void Awake(){
        instance = this;
    }
    
    // Start is called before the first frame update
    void Start()
    {
        scoreText.text = score.ToString();

    }

    public void addPoints(){
        score += 1;
        scoreText.text = score.ToString();
    }

    public void lessPoint(){
        score -= 1;
        scoreText.text = score.ToString();
    }
}
