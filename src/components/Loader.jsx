import React from 'react'
import './Loader.css'

export default function Loader() {
    return (
        <div className="game-loader-container">
            <div className="game-loader-wrapper">
                <div className="game-loader-card-container">
                    {[...Array(4)].map((_, index) => (
                        <div 
                            key={index} 
                            className={`game-loader-card game-loader-card-${index + 1}`}
                            onClick={(e) => {
                                e.target.classList.add('flip');
                                setTimeout(() => {
                                    e.target.classList.remove('flip');
                                }, 1500);
                            }}
                        >
                            <div className="game-loader-card-inner">
                                <div className="game-loader-card-front">?</div>
                                <div className="game-loader-card-back">🎮</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="game-loader-text">
                    <span>L</span>
                    <span>O</span>
                    <span>A</span>
                    <span>D</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </div>
            </div>
        </div>
    )
} 